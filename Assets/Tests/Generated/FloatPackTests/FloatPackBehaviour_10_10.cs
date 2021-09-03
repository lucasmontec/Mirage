// DO NOT EDIT: GENERATED BY FloatPackTestGenerator.cs

using System;
using System.Collections;
using Mirage.Serialization;
using Mirage.Tests.Runtime.ClientServer;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Mirage.Tests.Runtime.Generated.FloatPackAttributeTests
{
    public class FloatPackBehaviour_10_10 : NetworkBehaviour
    {
        [FloatPack(10, 10)]
        [SyncVar] public float myValue;
    }
    public class FloatPackTest_10_10 : ClientServerSetup<FloatPackBehaviour_10_10>
    {
        const float value = 3.3f;
        const float within = 0.0191f;

        [Test]
        public void SyncVarIsBitPacked()
        {
            serverComponent.myValue = value;

            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())
            {
                serverComponent.SerializeSyncVars(writer, true);

                Assert.That(writer.BitPosition, Is.EqualTo(10));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment()))
                {
                    clientComponent.DeserializeSyncVars(reader, true);
                    Assert.That(reader.BitPosition, Is.EqualTo(10));

                    Assert.That(clientComponent.myValue, Is.EqualTo(value).Within(within));
                }
            }
        }
    }
}
