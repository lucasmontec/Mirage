// DO NOT EDIT: GENERATED BY BitCountTestGenerator.cs

using System;
using System.Collections;
using Mirage.Serialization;
using Mirage.Tests.Runtime.ClientServer;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Mirage.Tests.Runtime.Generated.BitCountAttributeTests
{
    [System.Flags, System.Serializable]
    public enum MyByteEnum : byte
    {
        None = 0,
        HasHealth = 1,
        HasArmor = 2,
        HasGun = 4,
        HasAmmo = 8,
    }
    public class BitCountBehaviour_MyByteEnum_4 : NetworkBehaviour
    {
        [BitCount(4)]
        [SyncVar] public MyByteEnum myValue;

        public event Action<MyByteEnum> onRpc;

        [ClientRpc]
        public void RpcSomeFunction([BitCount(4)] MyByteEnum myParam)
        {
            onRpc?.Invoke(myParam);
        }
    }
    public class BitCountTest_MyByteEnum_4 : ClientServerSetup<BitCountBehaviour_MyByteEnum_4>
    {
        const MyByteEnum value = (MyByteEnum)3;

        [Test]
        public void SyncVarIsBitPacked()
        {
            serverComponent.myValue = value;

            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())
            {
                serverComponent.SerializeSyncVars(writer, true);

                Assert.That(writer.BitPosition, Is.EqualTo(4));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment()))
                {
                    clientComponent.DeserializeSyncVars(reader, true);
                    Assert.That(reader.BitPosition, Is.EqualTo(4));

                    Assert.That(clientComponent.myValue, Is.EqualTo(value));
                }
            }
        }

        // [UnityTest]
        // [Ignore("Rpc not supported yet")]
        public IEnumerator RpcIsBitPacked()
        {

            int called = 0;
            clientComponent.onRpc += (v) => { called++; Assert.That(v, Is.EqualTo(value)); };

            client.MessageHandler.UnregisterHandler<RpcMessage>();
            int payloadSize = 0;
            client.MessageHandler.RegisterHandler<RpcMessage>((player, msg) =>
            {
                // store value in variable because assert will throw and be catch by message wrapper
                payloadSize = msg.payload.Count;
                clientObjectManager.OnRpcMessage(msg);
            });


            serverComponent.RpcSomeFunction(value);
            yield return null;
            Assert.That(called, Is.EqualTo(1));
            Assert.That(payloadSize, Is.EqualTo(1), $"4 bits is 1 bytes in payload");
        }
    }
}
