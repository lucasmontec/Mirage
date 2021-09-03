// DO NOT EDIT: GENERATED BY QuaternionPackTestGenerator.cs

using System;
using System.Collections;
using Mirage.Serialization;
using Mirage.Tests.Runtime.ClientServer;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Mirage.Tests.Runtime.Generated.QuaternionPackAttributeTests
{
    public class QuaternionPackBehaviour_8_0 : NetworkBehaviour
    {
        [QuaternionPack(8)]
        [SyncVar] public Quaternion myValue;
    }
    public class QuaternionPackTest_8_0 : ClientServerSetup<QuaternionPackBehaviour_8_0>
    {
        static readonly Quaternion value = new Quaternion(0f, 0.7071068f, 0f, 0.7071068f);
        const float within = 0.0054f;

        [Test]
        public void SyncVarIsBitPacked()
        {
            serverComponent.myValue = value;

            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())
            {
                serverComponent.SerializeSyncVars(writer, true);

                Assert.That(writer.BitPosition, Is.EqualTo(26));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment()))
                {
                    clientComponent.DeserializeSyncVars(reader, true);
                    Assert.That(reader.BitPosition, Is.EqualTo(26));

                    Vector3 inVec = value * Vector3.forward;
                    Vector3 outVec = clientComponent.myValue * Vector3.forward;

                    // allow for extra within when rotating vector
                    Assert.AreEqual(inVec.x, outVec.x, within * 2, $"vx off by {Mathf.Abs(inVec.x - outVec.x)}");
                    Assert.AreEqual(inVec.y, outVec.y, within * 2, $"vy off by {Mathf.Abs(inVec.y - outVec.y)}");
                    Assert.AreEqual(inVec.z, outVec.z, within * 2, $"vz off by {Mathf.Abs(inVec.z - outVec.z)}");
                }
            }
        }
    }
}
