using System;
using System.Runtime.InteropServices;
using UnityEngine;

namespace Mirage
{
    [StructLayout(LayoutKind.Explicit, Size = 8)]
    public struct SyncSettings
    {
        [FieldOffset(0)]
        public SyncFrom From;
        [FieldOffset(1)]
        public SyncTo To;
        [FieldOffset(2)]
        public SyncTiming Timing;

        [Tooltip("Time in seconds until next change is synchronized to the client. '0' means send immediately if changed. '0.5' means only send changes every 500ms.\n(This is for state synchronization like SyncVars, SyncLists, OnSerialize. Not for Cmds, Rpcs, etc.)")]
        [FieldOffset(4)]
        public float Interval;

        public static readonly SyncSettings Default = new SyncSettings
        {
            From = SyncFrom.Server,
            To = SyncTo.Owner | SyncTo.Observers,
            Interval = 0.1f,
        };

        public void UpdateTime(ref float nextSyncTime, float now)
        {
            switch (Timing)
            {
                case SyncTiming.Variable:
                    // atlesat Interval before next sync 
                    nextSyncTime = now + Interval;
                    break;
                case SyncTiming.Fixed:
                    // just add Interval, so that it syncs 1/Interval times per second
                    // see SyncTiming.Fixed for example
                    nextSyncTime += Interval;
                    break;
                default:
                case SyncTiming.NoInterval:
                    // always sync
                    nextSyncTime = now;
                    break;
            }
        }

        public bool ShouldSyncFrom(NetworkIdentity identity)
        {
            if ((From & SyncFrom.Server) != 0 && identity.IsServer)
            {
                // only write if either owner or ObserversOnly
                // otherwise we can just skip the component
                return (To & SyncTo.Observers) != 0;
            }

            if ((From & SyncFrom.Owner) != 0 && identity.HasAuthority)
            {
                // if from owner, must be to server
                return (To & SyncTo.Server) != 0;
            }

            return false;
        }

        public bool CopyToObservers()
        {
            if ((From & SyncFrom.Server) != 0)
            {
                return (To & SyncTo.ObserversOnly) != 0;
            }

            return false;
        }

        public static bool IsValidDirection(SyncFrom from, SyncTo to)
        {
            if ((from & SyncFrom.Owner) != 0)
            {
                // if from owner,
                // server must be included in SyncTo
                // Observers is optional
                if ((to & SyncTo.Server) == 0)
                    return false;
            }

            if ((from & SyncFrom.Server) != 0)
            {
                // if from server,
                // must be to Owner or Observers
                // Observers is optional
                if ((to & SyncTo.Owner) == 0)
                    return false;
            }

            return true;
        }
    }


    [Flags]
    public enum SyncFrom : byte
    {
        None = 0,
        /// <summary>
        /// syncs from Owner to Server or 
        /// </summary>
        Owner = 1,
        Server = 2,
    }
    [Flags]
    public enum SyncTo : byte
    {
        None = 0,
        Owner = 1,
        ObserversOnly = 2,
        Server = 4,

        Observers = Owner | ObserversOnly,
        ServerAndObservers = Server | ObserversOnly
    }

    public enum SyncTiming : byte
    {
        /// <summary>
        /// Will wait for atleast <see cref="SyncSettings.Interval"/> after last sync before sending again.
        /// <para>
        /// Best used when values dont change often, or for non-time-critical data.
        /// </para>
        /// <para>
        /// Will send less often than <see cref="Fixed"/> for the same <see cref="SyncSettings.Interval"/>.
        /// </para>
        /// </summary>
        Variable = 0,

        /// <summary>
        /// Will ensure data is sent every <see cref="SyncSettings.Interval"/> if changed.
        /// <para>
        /// Best used for data that changes often and you want (1/<see cref="SyncSettings.Interval"/>) updates per second
        /// </para>
        /// </summary>
        /// <remarks>
        /// <b>Example of Fixed vs Variable</b>
        /// <para>
        /// if Interval = 0.1. Then Synctimes will look like: 0, 0.1, 0.2, 0.3, etc.
        /// </para>
        /// <para>
        /// Compared to <see cref="Variable"/> where the values depend more on the timedelta, for example they might look like: 0, 0.11, 0.215, 0.32, etc 
        /// </para>
        /// </remarks>
        Fixed = 1,

        /// <summary>
        /// Ignores Interval and will send changes in next update
        /// </summary>
        NoInterval = 2,
    }
}
