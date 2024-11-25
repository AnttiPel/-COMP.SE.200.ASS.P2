import add from "../src/add.js";

const oldPrice = 6;
const priceToAdd = 4;
const total = 10;

describe("Shopping cart total", () => {
  it("should update shopping cart total after adding item to basket", () => {
    const result = add(oldPrice, priceToAdd);
    expect(result).toBe(total);
  });

  it("should update shopping cart total after removing item from basket", () => {
    const result = add(total, -priceToAdd);
    expect(result).toBe(oldPrice);
  });
});
