import drop from "../src/drop";

const array = [1, 2, 3];

describe("Product deletion", () => {
  it("should delete first product", () => {
    expect(drop(array)).toEqual([2, 3]);
  });

  it("should delete first two products", () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  it("should delete first five products (all)", () => {
    expect(drop(array, 5)).toEqual([]);
  });

  it("should not delete any products", () => {
    expect(drop(array, 0)).toEqual([1, 2, 3]);
  });
});
