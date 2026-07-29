import { describe, it, expect } from "vitest";
import { STATUS_LABELS, STATUS_ORDER, statusLabel } from "@/lib/applications";

describe("application status helpers", () => {
  it("labels every status in the pipeline", () => {
    for (const status of STATUS_ORDER) {
      expect(STATUS_LABELS[status]).toBeTruthy();
    }
  });

  it("lists each status exactly once", () => {
    expect(new Set(STATUS_ORDER).size).toBe(STATUS_ORDER.length);
  });

  it("returns a human-readable label", () => {
    expect(statusLabel("INTERVIEW")).toBe("Interview");
  });
});