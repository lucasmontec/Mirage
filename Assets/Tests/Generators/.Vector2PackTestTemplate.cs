// DO NOT EDIT: GENERATED BY Vector2PackTestGenerator.cs

using System;
using System.Collections;
using Mirage.RemoteCalls;
using Mirage.Serialization;
using Mirage.Tests.Runtime.ClientServer;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Mirage.Tests.Runtime.Generated.Vector2PackAttributeTests.%%NAME%%
{
    public class BitPackBehaviour : NetworkBehaviour
    {
        [Vector2Pack(%%PACKER_ATTRIBUTE%%)]
        [SyncVar] public Vector2 myValue;

        public event Action<Vector2> onRpc;

        [ClientRpc]
        public void RpcSomeFunction( [Vector2Pack(%%PACKER_ATTRIBUTE%%)] Vector2 myParam)
        {
            onRpc?.Invoke(myParam);
        }
        
        // Use BitPackStruct in rpc so it has writer generated
        [ClientRpc]
        public void RpcOtherFunction(BitPackStruct myParam)
        {
            // nothing
        }
    }
    
    [NetworkMessage]
    public struct BitPackMessage 
    {
         [Vector2Pack(%%PACKER_ATTRIBUTE%%)] 
        public Vector2 myValue;
    }

    [Serializable]
    public struct BitPackStruct
    {
         [Vector2Pack(%%PACKER_ATTRIBUTE%%)] 
        public Vector2 myValue;
    }

    public class BitPackTest : ClientServerSetup<BitPackBehaviour>
    {
        private static readonly Vector2 value = %%VALUE%%;
        private const float within = %%WITHIN%%;

        private static void AssertValue(Vector2 actual)
        {
            Assert.That(actual.x, Is.EqualTo(value.x).Within(within));
            Assert.That(actual.y, Is.EqualTo(value.y).Within(within));
        }

        [Test]
        public void SyncVarIsBitPacked()
        {
            serverComponent.myValue = value;

            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())
            {
                serverComponent.SerializeSyncVars(writer, true);

                Assert.That(writer.BitPosition, Is.EqualTo(%%BIT_COUNT%%));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment(), null))
                {
                    clientComponent.DeserializeSyncVars(reader, true);
                    Assert.That(reader.BitPosition, Is.EqualTo(%%BIT_COUNT%%));

                    AssertValue(clientComponent.myValue);
                }
            }
        }

        [UnityTest]
        public IEnumerator RpcIsBitPacked()
        {
            int called = 0;
            clientComponent.onRpc += (v) => 
            { 
                called++;
                AssertValue(v); 
            };

            client.MessageHandler.UnregisterHandler<RpcMessage>();
            int payloadSize = 0;
            client.MessageHandler.RegisterHandler<RpcMessage>((player, msg) =>
            {
                // store value in variable because assert will throw and be catch by message wrapper
                payloadSize = msg.Payload.Count;
                clientObjectManager._rpcHandler.OnRpcMessage(player, msg);
            });

            serverComponent.RpcSomeFunction(value);
            yield return null;
            yield return null;
            Assert.That(called, Is.EqualTo(1));
            
            // this will round up to nearest 8
            int expectedPayLoadSize = (%%BIT_COUNT%% + 7) / 8;
            Assert.That(payloadSize, Is.EqualTo(expectedPayLoadSize), $"%%BIT_COUNT%% bits is %%PAYLOAD_SIZE%% bytes in payload");
        }

        [UnityTest]
        public IEnumerator StructIsBitPacked() 
        {
            var inMessage = new BitPackMessage 
            {
                myValue = value,
            };

            int payloadSize = 0;
            int called = 0;
            BitPackMessage outMessage = default;
            server.MessageHandler.RegisterHandler<BitPackMessage>((player, msg) =>
            {
                // store value in variable because assert will throw and be catch by message wrapper
                called++;
                outMessage = msg;
            });
            Action<NetworkDiagnostics.MessageInfo> diagAction = (info) =>
            {
                if (info.message is BitPackMessage)
                {
                    payloadSize = info.bytes;
                }
            };

            NetworkDiagnostics.OutMessageEvent += diagAction;
            client.Player.Send(inMessage);
            NetworkDiagnostics.OutMessageEvent -= diagAction;
            yield return null;
            yield return null;
            Assert.That(called, Is.EqualTo(1));
            // this will round up to nearest 8
            // +2 for message header
            int expectedPayLoadSize = ((%%BIT_COUNT%% + 7) / 8) + 2;
            Assert.That(payloadSize, Is.EqualTo(expectedPayLoadSize), $"%%BIT_COUNT%% bits is {expectedPayLoadSize - 2} bytes in payload");
            AssertValue(outMessage.myValue);
        }

        [Test]
        public void MessageIsBitPacked() 
        {
            var inStruct = new BitPackStruct 
            {
                myValue = value,
            };

            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())
            {
                // generic write, uses generated function that should include bitPacking
                writer.Write(inStruct);

                Assert.That(writer.BitPosition, Is.EqualTo(%%BIT_COUNT%%));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment(), null))
                {
                    var outStruct = reader.Read<BitPackStruct>();
                    Assert.That(reader.BitPosition, Is.EqualTo(%%BIT_COUNT%%));

                    AssertValue(outStruct.myValue);
                }
            }
        }
    }
}
