using System;
using System.Runtime.CompilerServices;
using Mirage.Logging;
using Mirage.Serialization;
using UnityEngine;

namespace Mirage.RemoteCalls
{
    public static class ClientRpcSender
    {
        private static readonly ILogger logger = LogFactory.GetLogger(typeof(ClientRpcSender));

        public static void Send(NetworkBehaviour behaviour, int index, NetworkWriter writer, int channelId, bool excludeOwner)
        {
            var message = CreateMessage(behaviour, index, writer);

            // The public facing parameter is excludeOwner in [ClientRpc]
            // so we negate it here to logically align with SendToReady.
            var includeOwner = !excludeOwner;
            behaviour.Identity.SendToRemoteObservers(message, includeOwner, channelId);
        }

        public static void SendTarget(NetworkBehaviour behaviour, int index, NetworkWriter writer, int channelId, INetworkPlayer player)
        {
            var message = CreateMessage(behaviour, index, writer);

            // connection parameter is optional. use owner if null
            if (player == null)
            {
                player = behaviour.Owner;
            }

            player.Send(message, channelId);
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        private static RpcMessage CreateMessage(NetworkBehaviour behaviour, int index, NetworkWriter writer)
        {
            var rpc = behaviour.remoteCallCollection.Get(index);

            Validate(behaviour, rpc);

            var message = new RpcMessage
            {
                netId = behaviour.NetId,
                componentIndex = behaviour.ComponentIndex,
                functionIndex = index,
                payload = writer.ToSegment()
            };
            return message;
        }

        private static void Validate(NetworkBehaviour behaviour, RemoteCall rpc)
        {
            var server = behaviour.Server;
            if (server == null || !server.Active)
            {
                throw new InvalidOperationException($"RPC Function {rpc} called when server is not active.");
            }

            // This cannot use Server.active, as that is not specific to this object.
            if (!behaviour.IsServer)
            {
                if (logger.WarnEnabled()) logger.LogWarning($"ClientRpc {rpc} called on un-spawned object: {behaviour.name}");
                return;
            }
        }
    }
}

