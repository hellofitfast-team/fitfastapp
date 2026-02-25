import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

/**
 * Native Convex cron jobs (always-on, unlike dynamic @convex-dev/crons).
 * These run on a fixed schedule regardless of user state.
 */
const crons = cronJobs();

crons.daily(
  "storage-orphan-cleanup",
  { hourUTC: 3, minuteUTC: 0 },
  internal.storage.runOrphanedStorageCleanup,
);

crons.daily(
  "data-retention-cleanup",
  { hourUTC: 4, minuteUTC: 0 },
  internal.dataRetention.runRetentionCleanup,
);

export default crons;
