import { toFinite } from "../src/.internal/toFinite";

describe("Basic Jest Test", () => {
  it("should add two numbers correctly", () => {
    const add = (a, b) => a + b;
    expect(add(2, 3)).toBe(5);
  });

  it("should check if an array contains a value", () => {
    const array = [1, 2, 3];
    expect(array).toContain(2);
  });
});
