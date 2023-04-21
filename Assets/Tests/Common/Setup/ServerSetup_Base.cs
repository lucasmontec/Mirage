using System;
using System.Collections.Generic;
using Cysharp.Threading.Tasks;
using Mirage.SocketLayer;
using NUnit.Framework;
using UnityEngine;
using Object = UnityEngine.Object;

namespace Mirage.Tests.BaseSetups
{
    /// <summary>
    /// Base class that will setup a serer, Use override HostMode to set host, and Method AddClient For remote clients
    ///
    /// <para>
    /// IMPORTANT: name of this should have _Base this is to imply it should not be used by tests directly
    ///            instead tests should use the ServerSetup class because that has runtime or edit time setup
    /// </para>
    /// </summary>
    public class ServerSetup_Base : TestBase
    {
        protected ServerInstance _serverInstance;
        protected List<ClientInstance> _remoteClients = new List<ClientInstance>();
        private int _clientNameIndex;

        // properties to make it easier to use in tests
        protected GameObject serverGo => _serverInstance.GameObject;
        protected NetworkServer server => _serverInstance.Server;
        protected ServerObjectManager serverObjectManager => _serverInstance.ServerObjectManager;
        protected MessageHandler ServerMessageHandler => server.MessageHandler;

        protected GameObject ServerGameObject(int i) => _serverInstance.Players[i].GameObject;
        protected NetworkIdentity ServerIdentity(int i) => _serverInstance.Players[i].Identity;
        protected INetworkPlayer ServerPlayer(int i) => _serverInstance.Players[i].Player;

        protected NetworkIdentity _characterPrefab;
        protected GameObject _characterPrefabGo => _characterPrefab.gameObject;

        protected virtual bool HostMode => false;
        protected virtual Config ServerConfig => null;
        protected virtual Config ClientConfig => null;

        protected async UniTask ServerSeutup()
        {
            Console.WriteLine($"[MirageTest] UnitySetUp class:{TestContext.CurrentContext.Test.ClassName} method:{TestContext.CurrentContext.Test.MethodName}");

            _clientNameIndex = 0;
            _serverInstance = HostMode
                ? new HostInstance(ServerConfig)
                : new ServerInstance(ServerConfig);
            ExtraServerSetup();

            // create prefab
            _characterPrefab = CreateNetworkIdentity(disable: true);
            _characterPrefab.name = "player (unspawned)";
            // DontDestroyOnLoad so that "prefab" wont be destroyed by scene loading
            // also means that NetworkScenePostProcess will skip this unspawned object
            Object.DontDestroyOnLoad(_characterPrefab);
            _characterPrefab.PrefabHash = Guid.NewGuid().GetHashCode();

            // create prefab before Setup, so i can be added to inside extra setup
            ExtraPrefabSetup(_characterPrefab);

            // wait 2 frames for start to be called
            await UniTask.DelayFrame(2);

            // start via instance, incase it is HostInstance
            _serverInstance.StartServer();

            await ExtraSetup();

            await LateSetup();
        }

        /// <summary>
        /// called before start on server objects
        /// </summary>
        protected virtual void ExtraServerSetup() { }

        /// <summary>
        /// called on prefab before it is fully setup
        /// </summary>
        protected virtual void ExtraPrefabSetup(NetworkIdentity prefab) { }

        /// <summary>
        /// called before Start() after client objects is setup
        /// </summary>
        protected virtual void ExtraClientSetup(ClientInstance instance) { }

        /// <summary>
        /// Called after client is connected and spawned character
        /// </summary>
        /// <param name="instance"></param>
        protected virtual void ExtraClientLateSetup(ClientInstance instance) { }

        /// <summary>
        /// Called after server is ready, before LateSetup
        /// </summary>
        /// <returns></returns>
        protected virtual UniTask ExtraSetup() => UniTask.CompletedTask;

        /// <summary>
        /// Called after all other setup methods
        /// </summary>
        /// <returns></returns>
        protected virtual UniTask LateSetup() => UniTask.CompletedTask;

        /// <summary>
        /// Use this to create a client instance that doesn't automatically connect
        /// </summary>
        /// <returns></returns>
        public ClientInstance CreateClientInstance(bool extraSetup = true)
        {
            var instance = new ClientInstance(ClientConfig, _serverInstance.SocketFactory, _clientNameIndex.ToString());
            _clientNameIndex++;
            if (extraSetup)
                ExtraClientSetup(instance);

            return instance;
        }

        /// <summary>
        /// Creates and adds a client instance
        /// </summary>
        /// <returns></returns>
        public async UniTask<ClientInstance> AddClient()
        {
            var instance = CreateClientInstance();
            await AddClient(instance);
            return instance;
        }

        /// <summary>
        /// adds 
        /// </summary>
        /// <param name="instance"></param>
        /// <returns></returns>
        public async UniTask AddClient(ClientInstance instance)
        {
            if (_remoteClients.Contains(instance))
                throw new ArgumentException("instance already added");

            var serverStartCount = server.Players.Count;
            instance.Client.Connect("localhost");

            // wait for new connections
            await AsyncUtil.WaitUntilWithTimeout(() => server.Players.Count > serverStartCount);

            await SpawnCharacter(instance);
            instance.SetupCharacter();

            _remoteClients.Add(instance);
            ExtraClientLateSetup(instance);
        }

        // used by host and client
        protected async UniTask SpawnCharacter(IClientInstance instance)
        {
            var serverPlayer = _serverInstance.GetNewPlayer();

            instance.ClientObjectManager.RegisterPrefab(_characterPrefab);

            // wait for client and server to initialize themselves
            await UniTask.Yield();

            _serverInstance.AddCharacter(serverPlayer, _characterPrefab);
            // wait for client to spawn it
            await AsyncUtil.WaitUntilWithTimeout(() => instance.Client.Player.HasCharacter);
        }

        public virtual void ExtraTearDown() { }
        public virtual UniTask ExtraTearDownAsync() => UniTask.CompletedTask;

        public async UniTask TearDownAsync()
        {
            // make sure all gameobject are added to base.toDestroy (duplicates are fine)

            foreach (var instance in _remoteClients)
            {
                instance.AddCleanupObjects(toDestroy);

                if (instance.Client.Active)
                    instance.Client.Disconnect();
            }

            // check active, it might have been stopped by tests
            _serverInstance.AddCleanupObjects(toDestroy);
            if (server.Active)
                server.Stop();

            foreach (var client in _remoteClients)
            {
                await AsyncUtil.WaitUntilWithTimeout(() => !client.Client.Active);
                Object.DestroyImmediate(client.GameObject);
            }
            await AsyncUtil.WaitUntilWithTimeout(() => !server.Active);


            TearDownTestObjects();

            ExtraTearDown();
            await ExtraTearDownAsync();

            Console.WriteLine($"[MirageTest] UnityTearDown class:{TestContext.CurrentContext.Test.ClassName} method:{TestContext.CurrentContext.Test.MethodName}");
        }

        protected void RunOnAll(NetworkIdentity identity, Action<NetworkIdentity> change)
        {
            change.Invoke(_serverInstance.Get(identity));
            foreach (var remote in _remoteClients)
            {
                change.Invoke(remote.Get(identity));
            }
        }

        protected void RunOnAll<T>(T comp, Action<T> action) where T : NetworkBehaviour
        {
            action.Invoke(_serverInstance.Get(comp));
            foreach (var remote in _remoteClients)
            {
                action.Invoke(remote.Get(comp));
            }
        }

        protected void RunOnAllClients(Action<ClientInstance> action)
        {
            foreach (var remote in _remoteClients)
            {
                action.Invoke(remote);
            }
        }

        protected void RunOnAllClients(Action<ClientInstance, int> action)
        {
            for (var i = 0; i < _remoteClients.Count; i++)
            {
                var remote = _remoteClients[i];
                action.Invoke(remote, i);
            }
        }
    }
}
