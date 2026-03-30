import { describe, it, expect } from "vitest";
import * as constants from "../constants";

describe("Client Constants", () => {
  it("upload limits are positive", () => {
    expect(constants.MAX_UPLOAD_SIZE_BYTES).toBeGreaterThan(0);
    expect(constants.MAX_UPLOAD_SIZE_MB).toBeGreaterThan(0);
    expect(constants.MAX_CHECK_IN_PHOTOS).toBeGreaterThan(0);
  });

  it("MAX_UPLOAD_SIZE_MB matches bytes conversion", () => {
    expect(constants.MAX_UPLOAD_SIZE_MB).toBe(constants.MAX_UPLOAD_SIZE_BYTES / (1024 * 1024));
  });

  it("AI constants are reasonable", () => {
    expect(constants.AI_MAX_OUTPUT_TOKENS).toBeGreaterThan(0);
    expect(constants.AI_MAX_RETRIES).toBeGreaterThanOrEqual(1);
    expect(constants.AI_DEFAULT_PLAN_DURATION_DAYS).toBeGreaterThan(0);
    expect(constants.AI_REQUEST_TIMEOUT_MS).toBeGreaterThanOrEqual(5000);
  });

  it("retry config has valid backoff", () => {
    expect(constants.RETRY_MAX_ATTEMPTS).toBeGreaterThanOrEqual(1);
    expect(constants.RETRY_INITIAL_DELAY_MS).toBeGreaterThan(0);
    expect(constants.RETRY_BACKOFF_MULTIPLIER).toBeGreaterThan(1);
    expect(constants.RETRY_MAX_DELAY_MS).toBeGreaterThan(constants.RETRY_INITIAL_DELAY_MS);
  });

  it("PWA update interval is between 1 and 60 minutes", () => {
    expect(constants.SW_UPDATE_INTERVAL_MS).toBeGreaterThanOrEqual(60_000);
    expect(constants.SW_UPDATE_INTERVAL_MS).toBeLessThanOrEqual(3_600_000);
  });

  it("router pending timing is reasonable", () => {
    expect(constants.ROUTER_PENDING_MS).toBeGreaterThanOrEqual(50);
    expect(constants.ROUTER_PENDING_MS).toBeLessThanOrEqual(1000);
  });
});
