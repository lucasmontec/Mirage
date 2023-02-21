using System;
using System.Collections.Generic;
using UnityEngine;

namespace Mirage
{
    /// <summary>
    /// Sent to client to mark their scene as not ready
    /// <para>Client can sent <see cref="SceneReadyMessage"/> once its scene is ready again</para>
    /// </summary>
    [NetworkMessage]
    public struct SceneNotReadyMessage { }

    [NetworkMessage]
    public struct AddCharacterMessage { }

    [NetworkMessage]
    public struct SceneMessage
    {
        public string MainActivateScene;
        // Normal = 0, LoadAdditive = 1, UnloadAdditive = 2
        public SceneOperation SceneOperation;
        public List<string> AdditiveScenes;
    }

    /// <summary>
    /// Sent to indicate the scene is finished loading
    /// </summary>
    [NetworkMessage]
    public struct SceneReadyMessage { }


    [NetworkMessage]
    public struct ServerRpcMessage
    {
        public uint netId;
        public int componentIndex;
        public int functionIndex;

        // the parameters for the Cmd function
        // -> ArraySegment to avoid unnecessary allocations
        public ArraySegment<byte> payload;
    }

    [NetworkMessage]
    public struct ServerRpcWithReplyMessage
    {
        public uint netId;
        public int componentIndex;
        public int functionIndex;

        // if the server Rpc can return values
        // this then a ServerRpcReply will be sent with this id
        public int replyId;
        // the parameters for the Cmd function
        // -> ArraySegment to avoid unnecessary allocations
        public ArraySegment<byte> payload;
    }

    [NetworkMessage]
    public struct ServerRpcReply
    {
        public int replyId;
        public ArraySegment<byte> payload;
    }

    [NetworkMessage]
    public struct RpcMessage
    {
        public uint netId;
        public int componentIndex;
        public int functionIndex;
        // the parameters for the Cmd function
        // -> ArraySegment to avoid unnecessary allocations
        public ArraySegment<byte> payload;
    }

    [NetworkMessage]
    public struct SpawnMessage
    {
        /// <summary>
        /// netId of new or existing object
        /// </summary>
        public uint netId;
        /// <summary>
        /// Is the spawning object the local player. Sets ClientScene.localPlayer
        /// </summary>
        public bool isLocalPlayer;
        /// <summary>
        /// Sets hasAuthority on the spawned object
        /// </summary>
        public bool isOwner;
        /// <summary>
        /// The id of the scene object to spawn
        /// </summary>
        public ulong? sceneId;
        /// <summary>
        /// The id of the prefab to spawn
        /// <para>If sceneId != 0 then it is used instead of prefabHash</para>
        /// </summary>
        public int? prefabHash;
        /// <summary>
        /// Local position
        /// </summary>
        public Vector3? position;
        /// <summary>
        /// Local rotation
        /// </summary>
        public Quaternion? rotation;
        /// <summary>
        /// Local scale
        /// </summary>
        public Vector3? scale;
        /// <summary>
        /// The serialized component data
        /// <remark>ArraySegment to avoid unnecessary allocations</remark>
        /// </summary>
        public ArraySegment<byte> payload;
    }

    [NetworkMessage]
    public struct RemoveAuthorityMessage
    {
        public uint netId;
    }

    [NetworkMessage]
    public struct RemoveCharacterMessage
    {
        public bool keepAuthority;
    }

    [NetworkMessage]
    public struct ObjectDestroyMessage
    {
        public uint netId;
    }

    [NetworkMessage]
    public struct ObjectHideMessage
    {
        public uint netId;
    }

    [NetworkMessage]
    public struct UpdateVarsMessage
    {
        public uint netId;
        // the serialized component data
        // -> ArraySegment to avoid unnecessary allocations
        public ArraySegment<byte> payload;
    }

    /// <summary>
    /// A client sends this message to the server
    /// to calculate RTT and synchronize time
    /// </summary>
    [NetworkMessage]
    public struct NetworkPingMessage
    {
        /// <summary>
        /// Time client sent this message
        /// </summary>
        public double clientTime;

        /// <summary>
        /// Current RTT calculated by client
        /// </summary>
        public float RTT;
    }

    /// <summary>
    /// The server responds with this message
    /// The client can use this to calculate RTT and sync time 
    /// </summary>
    [NetworkMessage]
    public struct NetworkPongMessage
    {
        /// <summary>
        /// Time client sent in <see cref="NetworkPingMessage"/>. just echo back the value client sent, so that client can use it to calculate RTT
        /// </summary>
        public double clientTime;
        /// <summary>
        /// Time server processed <see cref="NetworkPingMessage"/> and sent this message as a reply
        /// </summary>
        public double serverTime;
    }
}
