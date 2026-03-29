import { describe, it, expect } from "vitest";
import * as constants from "../constants";

describe("Admin Constants", () => {
  it("pagination sizes are positive integers", () => {
    expect(constants.CLIENTS_PAGE_SIZE).toBeGreaterThan(0);
    expect(constants.NOTIFICATIONS_PAGE_SIZE).toBeGreaterThan(0);
    expect(Number.isInteger(constants.CLIENTS_PAGE_SIZE)).toBe(true);
    expect(Number.isInteger(constants.NOTIFICATIONS_PAGE_SIZE)).toBe(true);
  });

  it("check-in frequency bounds are valid", () => {
    expect(constants.CHECK_IN_FREQUENCY_MIN).toBeLessThan(constants.CHECK_IN_FREQUENCY_MAX);
    expect(constants.CHECK_IN_FREQUENCY_DEFAULT).toBeGreaterThanOrEqual(
      constants.CHECK_IN_FREQUENCY_MIN,
    );
    expect(constants.CHECK_IN_FREQUENCY_DEFAULT).toBeLessThanOrEqual(
      constants.CHECK_IN_FREQUENCY_MAX,
    );
  });

  it("workout duration bounds are valid", () => {
    expect(constants.WORKOUT_DURATION_MIN).toBeLessThan(constants.WORKOUT_DURATION_MAX);
    expect(constants.WORKOUT_DURATION_DEFAULT).toBeGreaterThanOrEqual(
      constants.WORKOUT_DURATION_MIN,
    );
    expect(constants.WORKOUT_DURATION_DEFAULT).toBeLessThanOrEqual(constants.WORKOUT_DURATION_MAX);
  });

  it("timeouts are reasonable (100ms - 10s)", () => {
    const timeouts = [
      constants.SAVE_SUCCESS_TIMEOUT,
      constants.SAVE_ERROR_TIMEOUT,
      constants.COPY_NOTIFICATION_TIMEOUT,
      constants.SETUP_REDIRECT_DELAY,
    ];
    timeouts.forEach((t) => {
      expect(t).toBeGreaterThanOrEqual(100);
      expect(t).toBeLessThanOrEqual(10000);
    });
  });

  it("bulk batch size is between 1 and 50", () => {
    expect(constants.BULK_MUTATION_BATCH_SIZE).toBeGreaterThanOrEqual(1);
    expect(constants.BULK_MUTATION_BATCH_SIZE).toBeLessThanOrEqual(50);
  });

  it("dashboard display ranges are positive", () => {
    expect(constants.DASHBOARD_MONTHS_SHOWN).toBeGreaterThan(0);
    expect(constants.DASHBOARD_WEEKS_SHOWN).toBeGreaterThan(0);
  });
});
