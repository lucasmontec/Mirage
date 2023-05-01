using System;
using Mirage.Serialization;
using NUnit.Framework;
using UnityEngine;

namespace Mirage.Tests.Runtime.Serialization
{
    public class AssertionMethodAttribute : Attribute { }

    [TestFixture]
    public class MessageTests
    {
        [Test]
        public void ServerRpcMessageTest()
        {
            // try setting value with constructor
            var message = new ServerRpcMessage
            {
                NetId = 42,
                ComponentIndex = 4,
                FunctionIndex = 2,
                Payload = new ArraySegment<byte>(new byte[] { 0x01, 0x02 })
            };
            var arr = MessagePacker.Pack(message);

            // deserialize the same data - do we get the same result?
            var fresh = MessagePacker.Unpack<ServerRpcMessage>(arr, null);
            Assert.That(fresh.NetId, Is.EqualTo(message.NetId));
            Assert.That(fresh.ComponentIndex, Is.EqualTo(message.ComponentIndex));
            Assert.That(fresh.FunctionIndex, Is.EqualTo(message.FunctionIndex));
            Assert.That(fresh.Payload, Has.Count.EqualTo(message.Payload.Count));
            for (var i = 0; i < fresh.Payload.Count; ++i)
                Assert.That(fresh.Payload.Array[fresh.Payload.Offset + i],
                    Is.EqualTo(message.Payload.Array[message.Payload.Offset + i]));
        }

        [AssertionMethod]
        private void TestSerializeDeserialize<T>(T message)
        {
            // serialize
            var arr = MessagePacker.Pack(message);
            var fresh = MessagePacker.Unpack<T>(arr, null);
            Assert.That(fresh, Is.EqualTo(message));
        }

        [Test]
        public void NetworkPingMessageTest()
        {
            TestSerializeDeserialize(new NetworkPingMessage
            {
                ClientTime = DateTime.Now.ToOADate()
            });
        }

        [Test]
        public void NetworkPongMessageTest()
        {
            TestSerializeDeserialize(new NetworkPongMessage
            {
                ClientTime = DateTime.Now.ToOADate(),
                ServerTime = DateTime.Now.ToOADate(),
            });
        }

        [Test]
        public void NotReadyMessageTest()
        {
            TestSerializeDeserialize(new SceneNotReadyMessage());
        }

        [Test]
        public void ObjectDestroyMessageTest()
        {
            TestSerializeDeserialize(new ObjectDestroyMessage
            {
                NetId = 42,
            });
        }

        [Test]
        public void ObjectHideMessageTest()
        {
            TestSerializeDeserialize(new ObjectHideMessage
            {
                NetId = 42,
            });
        }

        [Test]
        public void SceneReadyMessageTest()
        {
            TestSerializeDeserialize(new SceneReadyMessage());
        }

        [Test]
        public void AddPlayerMessageTest()
        {
            TestSerializeDeserialize(new AddCharacterMessage());
        }

        [Test]
        public void RpcMessageTest()
        {
            // try setting value with constructor
            var message = new RpcMessage
            {
                NetId = 42,
                ComponentIndex = 4,
                FunctionIndex = 3,
                Payload = new ArraySegment<byte>(new byte[] { 0x01, 0x02 })
            };
            var arr = MessagePacker.Pack(message);
            var fresh = MessagePacker.Unpack<RpcMessage>(arr, null);
            Assert.That(fresh.NetId, Is.EqualTo(message.NetId));
            Assert.That(fresh.ComponentIndex, Is.EqualTo(message.ComponentIndex));
            Assert.That(fresh.FunctionIndex, Is.EqualTo(message.FunctionIndex));
            Assert.That(fresh.Payload.Count, Is.EqualTo(message.Payload.Count));
            for (var i = 0; i < fresh.Payload.Count; ++i)
                Assert.That(fresh.Payload.Array[fresh.Payload.Offset + i],
                    Is.EqualTo(message.Payload.Array[message.Payload.Offset + i]));
        }

        [Test]
        [TestCase(0ul)]
        [TestCase(42ul)]
        public void SpawnMessageTest(ulong testSceneId)
        {
            // try setting value with constructor
            var message = new SpawnMessage
            {
                NetId = 42,
                IsLocalPlayer = true,
                IsOwner = true,
                SceneId = testSceneId,
                PrefabHash = Guid.NewGuid().GetHashCode(),
            };
            var arr = MessagePacker.Pack(message);
            var fresh = MessagePacker.Unpack<SpawnMessage>(arr, null);
            Assert.That(fresh.netId, Is.EqualTo(message.netId));
            Assert.That(fresh.isLocalPlayer, Is.EqualTo(message.isLocalPlayer));
            Assert.That(fresh.isOwner, Is.EqualTo(message.isOwner));
            Assert.That(fresh.sceneId, Is.EqualTo(message.sceneId));
            Assert.That(fresh.prefabHash, Is.EqualTo(message.prefabHash));
            Assert.That(fresh.position, Is.EqualTo(message.position));
            Assert.That(fresh.rotation, Is.EqualTo(message.rotation));
            Assert.That(fresh.scale, Is.EqualTo(message.scale));
            Assert.That(fresh.payload.Count, Is.EqualTo(message.payload.Count));

            for (var i = 0; i < fresh.payload.Count; ++i)
                Assert.That(fresh.payload.Array[fresh.payload.Offset + i],
                    Is.EqualTo(message.payload.Array[message.payload.Offset + i]));
        }

        [Test]
        public void UpdateVarsMessageTest()
        {
            // try setting value with constructor
            var message = new UpdateVarsMessage
            {
                NetId = 42,
                Payload = new ArraySegment<byte>(new byte[] { 0x01, 0x02 })
            };
            var arr = MessagePacker.Pack(message);
            var fresh = MessagePacker.Unpack<UpdateVarsMessage>(arr, null);
            Assert.That(fresh.NetId, Is.EqualTo(message.NetId));
            Assert.That(fresh.Payload.Count, Is.EqualTo(message.Payload.Count));
            for (var i = 0; i < fresh.Payload.Count; ++i)
                Assert.That(fresh.Payload.Array[fresh.Payload.Offset + i],
                    Is.EqualTo(message.Payload.Array[message.Payload.Offset + i]));
        }

        [NetworkMessage]
        private struct NestedMessageWithAttr { }

        private struct NestedMessageWithoutAttr { }

        [Test]
        public void CreatesWriterForUnusedMessageWithAttribute()
        {
            Assert.That(Writer<NestedMessageWithAttr>.Write, Is.Not.Null);
            Assert.That(Reader<NestedMessageWithAttr>.Read, Is.Not.Null);

            // should not create for *unused* struct without attribute
            Assert.That(Writer<NestedMessageWithoutAttr>.Write, Is.Null);
            Assert.That(Reader<NestedMessageWithoutAttr>.Read, Is.Null);
        }
    }
}
