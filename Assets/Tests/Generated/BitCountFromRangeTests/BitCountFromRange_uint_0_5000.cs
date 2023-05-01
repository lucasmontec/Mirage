// DO NOT EDIT: GENERATED BY BitCountFromRangeTestGenerator.cs

using System;
using System.Collections;
using Mirage.Serialization;
using Mirage.Tests.Runtime.ClientServer;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Mirage.Tests.Runtime.Generated.BitCountFromRangeAttributeTests.uint_0_5000
{
    
    public class BitPackBehaviour : NetworkBehaviour
    {
        [BitCountFromRange(0, 5000)]
        [SyncVar] public uint myValue;

        public event Action<uint> onRpc;

        [ClientRpc]
        public void RpcSomeFunction([BitCountFromRange(0, 5000)] uint myParam)
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
        [BitCountFromRange(0, 5000)]
        public uint myValue;
    }

    [Serializable]
    public struct BitPackStruct
    {
        [BitCountFromRange(0, 5000)]
        public uint myValue;
    }
    
    public class BitPackTest : ClientServerSetup<BitPackBehaviour>
    {
        private const uint value = 20;

        [Test]
        public void SyncVarIsBitPacked()
        {
            serverComponent.myValue = value;

            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())
            {
                serverComponent.SerializeSyncVars(writer, true);

                Assert.That(writer.BitPosition, Is.EqualTo(13));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment(), null))
                {
                    clientComponent.DeserializeSyncVars(reader, true);
                    Assert.That(reader.BitPosition, Is.EqualTo(13));

                    Assert.That(clientComponent.myValue, Is.EqualTo(value));
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
                Assert.That(v, Is.EqualTo(value)); 
            };

            client.MessageHandler.UnregisterHandler<RpcMessage>();
            int payloadSize = 0;
            client.MessageHandler.RegisterHandler<RpcMessage>((player, msg) =>
            {
                // store value in variable because assert will throw and be catch by message wrapper
                payloadSize = msg.Payload.Count;
                clientObjectManager.OnRpcMessage(msg);
            });

            serverComponent.RpcSomeFunction(value);
            yield return null;
            yield return null;
            Assert.That(called, Is.EqualTo(1));
            
            // this will round up to nearest 8
            int expectedPayLoadSize = (13 + 7) / 8;
            Assert.That(payloadSize, Is.EqualTo(expectedPayLoadSize), $"13 bits is 2 bytes in payload");
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
            int expectedPayLoadSize = ((13 + 7) / 8) + 2;
            Assert.That(payloadSize, Is.EqualTo(expectedPayLoadSize), $"13 bits is {expectedPayLoadSize - 2} bytes in payload");
            Assert.That(outMessage, Is.EqualTo(inMessage));
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

                Assert.That(writer.BitPosition, Is.EqualTo(13));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment(), null))
                {
                    var outStruct = reader.Read<BitPackStruct>();
                    Assert.That(reader.BitPosition, Is.EqualTo(13));

                    Assert.That(outStruct, Is.EqualTo(inStruct));
                }
            }
        }
    }
}
