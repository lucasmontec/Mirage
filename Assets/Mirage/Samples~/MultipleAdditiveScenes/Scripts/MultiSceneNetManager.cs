using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Mirage.Examples.MultipleAdditiveScenes
{
    [AddComponentMenu("")]
    public class MultiSceneNetManager : NetworkManager
    {
        [Header("MultiScene Setup")]
        public int instances = 3;

        [Scene]
        public string gameScene;
        private readonly List<Scene> subScenes = new List<Scene>();

        /// <summary>
        /// This is invoked when a server is started - including when a host is started.
        /// <para>StartServer has multiple signatures, but they all cause this hook to be called.</para>
        /// </summary>
        public void Start()
        {
            Server.Started.AddListener(() => StartCoroutine(LoadSubScenes()));
            Server.Authenticated.AddListener(OnServerAddPlayer);
            Server.Stopped.AddListener(OnStopServer);
            Client.Disconnected.AddListener(OnStopClient);
        }

        #region Server System Callbacks

        /// <summary>
        /// Called on the server when a client adds a new player with ClientScene.AddPlayer.
        /// <para>The default implementation for this function creates a new player object from the playerPrefab.</para>
        /// </summary>
        /// <param name="player">Connection from client.</param>
        public void OnServerAddPlayer(INetworkPlayer player)
        {
            // This delay is really for the host player that loads too fast for the server to have subscene loaded
            StartCoroutine(AddPlayerDelayed(player));
        }

        private int playerId = 1;

        private IEnumerator AddPlayerDelayed(INetworkPlayer player)
        {
            yield return new WaitForSeconds(.5f);

            ((NetworkSceneManager)NetworkSceneManager).ServerLoadSceneAdditively(gameScene, Server.Players);

            var playerScore = player.Identity.GetComponent<PlayerScore>();
            playerScore.playerNumber = playerId;
            playerScore.scoreIndex = playerId / subScenes.Count;
            playerScore.matchIndex = playerId % subScenes.Count;

            if (subScenes.Count > 0)
                UnityEngine.SceneManagement.SceneManager.MoveGameObjectToScene(player.Identity.gameObject, subScenes[playerId % subScenes.Count]);

            playerId++;
        }

        #endregion

        #region Start & Stop Callbacks



        private IEnumerator LoadSubScenes()
        {
            for (var index = 0; index < instances; index++)
            {
                yield return UnityEngine.SceneManagement.SceneManager.LoadSceneAsync(gameScene, new LoadSceneParameters { loadSceneMode = LoadSceneMode.Additive, localPhysicsMode = LocalPhysicsMode.Physics3D });
                subScenes.Add(UnityEngine.SceneManagement.SceneManager.GetSceneAt(index + 1));
            }
        }

        /// <summary>
        /// This is called when a server is stopped - including when a host is stopped.
        /// </summary>
        public void OnStopServer()
        {
            // note: if in host mode you may not want to send SceneMessage to host player. In that case use NetworkServer.SendToManyExcept instead
            Server.SendToAll(new SceneMessage { MainActivateScene = gameScene, SceneOperation = SceneOperation.UnloadAdditive });
            StartCoroutine(UnloadSubScenes());
        }

        public void OnStopClient(ClientStoppedReason reason)
        {
            if (!Server.Active)
                StartCoroutine(UnloadClientSubScenes());
        }

        private IEnumerator UnloadClientSubScenes()
        {
            for (var index = 0; index < UnityEngine.SceneManagement.SceneManager.sceneCount; index++)
            {
                if (UnityEngine.SceneManagement.SceneManager.GetSceneAt(index) != UnityEngine.SceneManagement.SceneManager.GetActiveScene())
                    yield return UnityEngine.SceneManagement.SceneManager.UnloadSceneAsync(UnityEngine.SceneManagement.SceneManager.GetSceneAt(index));
            }
        }

        private IEnumerator UnloadSubScenes()
        {
            for (var index = 0; index < subScenes.Count; index++)
                yield return UnityEngine.SceneManagement.SceneManager.UnloadSceneAsync(subScenes[index]);

            subScenes.Clear();

            yield return Resources.UnloadUnusedAssets();
        }

        #endregion
    }
}
