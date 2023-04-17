import { describe, it, expect } from "vitest";

// The two tests marked with concurrent will be run in parallel
describe("suite", () => {
  it("serial test", () => {
    expect(1 + 1).toBe(3);
  });
});
