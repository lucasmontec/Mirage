// DO NOT EDIT: GENERATED BY VarIntBlocksTestGenerator.cs

using System;
using System.Collections;
using Mirage.Serialization;
using Mirage.Tests.Runtime.ClientServer;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Mirage.Tests.Runtime.Generated.VarIntBlocksTests.uint_8
{
    
    public class BitPackBehaviour : NetworkBehaviour
    {
        [VarIntBlocks(8)]
        [SyncVar] public uint myValue;

        public event Action<uint> onRpc;

        [ClientRpc]
        public void RpcSomeFunction([VarIntBlocks(8)] uint myParam)
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
        [VarIntBlocks(8)] 
        public uint myValue;
    }

    [Serializable]
    public struct BitPackStruct
    {
        [VarIntBlocks(8)] 
        public uint myValue;
    }

    public class BitPackTest : ClientServerSetup<BitPackBehaviour>
    {
        public struct TestCase 
        {
            public uint value;
            public int expectedBits;
            public override string ToString() => value.ToString();
        }

        private static TestCase[] cases = new TestCase[] 
        {
            new TestCase { value = 170U, expectedBits = 9 },
            new TestCase { value = 500U, expectedBits = 18 },
            new TestCase { value = 15000U, expectedBits = 18 },
            new TestCase { value = 50000U, expectedBits = 18 },
            new TestCase { value = 400000U, expectedBits = 27 }
        };

        [Test]
        public void SyncVarIsBitPacked([ValueSource(nameof(cases))] TestCase TestCase)
        {
            uint value = TestCase.value; 
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
            uint value = TestCase.value; 
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
            uint value = TestCase.value; 
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
            uint value = TestCase.value; 
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
