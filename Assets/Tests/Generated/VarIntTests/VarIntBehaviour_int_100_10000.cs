// DO NOT EDIT: GENERATED BY VarIntTestGenerator.cs

using System;
using System.Collections;
using Mirage.Serialization;
using Mirage.Tests.Runtime.ClientServer;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Mirage.Tests.Runtime.Generated.VarIntTests.int_100_10000
{
    
    public class BitPackBehaviour : NetworkBehaviour
    {
        [VarInt(100, 10000)]
        [SyncVar] public int myValue;

        public event Action<int> onRpc;

        [ClientRpc]
        public void RpcSomeFunction([VarInt(100, 10000)] int myParam)
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
        [VarInt(100, 10000)] 
        public int myValue;
    }

    [Serializable]
    public struct BitPackStruct
    {
        [VarInt(100, 10000)] 
        public int myValue;
    }

    public class BitPackTest : ClientServerSetup<BitPackBehaviour>
    {
        public struct TestCase 
        {
            public int value;
            public int expectedBits;
            public override string ToString() => value.ToString();
        }

        private static TestCase[] cases = new TestCase[] 
        {
            new TestCase { value = 10, expectedBits = 8 },
            new TestCase { value = 100, expectedBits = 8 },
            new TestCase { value = 1000, expectedBits = 16 }
        };

        [Test]
        public void SyncVarIsBitPacked([ValueSource(nameof(cases))] TestCase TestCase)
        {
            int value = TestCase.value; 
            int expectedBitCount = TestCase.expectedBits;

            serverComponent.myValue = value;

            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())
            {
                serverComponent.SerializeSyncVars(writer, true);

                Assert.That(writer.BitPosition, Is.EqualTo(expectedBitCount));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment(), null))
                {
                    clientComponent.DeserializeSyncVars(reader, true);
                    Assert.That(reader.BitPosition, Is.EqualTo(expectedBitCount));

                    Assert.That(clientComponent.myValue, Is.EqualTo(value));
                }
            }
        }

        [UnityTest]
        public IEnumerator RpcIsBitPacked([ValueSource(nameof(cases))] TestCase TestCase)
        {
            int value = TestCase.value; 
            int expectedBitCount = TestCase.expectedBits;

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
            int expectedPayLoadSize = (expectedBitCount + 7) / 8;
            Assert.That(payloadSize, Is.EqualTo(expectedPayLoadSize), $"expectedBitCount bits is %%PAYLOAD_SIZE%% bytes in payload");
        }

        [UnityTest]
        public IEnumerator StructIsBitPacked([ValueSource(nameof(cases))] TestCase TestCase)
        {
            int value = TestCase.value; 
            int expectedBitCount = TestCase.expectedBits;

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
            int expectedPayLoadSize = ((expectedBitCount + 7) / 8) + 2;
            Assert.That(payloadSize, Is.EqualTo(expectedPayLoadSize), $"{expectedBitCount} bits is {expectedPayLoadSize - 2} bytes in payload");
            Assert.That(outMessage, Is.EqualTo(inMessage));
        }

        [Test]
        public void MessageIsBitPacked([ValueSource(nameof(cases))] TestCase TestCase)
        {
            int value = TestCase.value; 
            int expectedBitCount = TestCase.expectedBits;

            var inStruct = new BitPackStruct 
            {
                myValue = value,
            };

            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())
            {
                // generic write, uses generated function that should include bitPacking
                writer.Write(inStruct);

                Assert.That(writer.BitPosition, Is.EqualTo(expectedBitCount));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment(), null))
                {
                    var outStruct = reader.Read<BitPackStruct>();
                    Assert.That(reader.BitPosition, Is.EqualTo(expectedBitCount));

                    Assert.That(outStruct, Is.EqualTo(inStruct));
                }
            }
        }
    }
}
