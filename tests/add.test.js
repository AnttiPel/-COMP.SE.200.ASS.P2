/**
 * @fileoverview This file contains unit tests for the add function, which updates the shopping cart total.
 * The tests ensure that the total is correctly updated when items are added to or removed from the basket.
 *
 * @module tests/addToBasket.test
 */

import add from "../src/add.js";
import "jest-extended";
import "jest-chain";

/**
 * Global variables used in the tests for readability.
 * @constant {number} oldPrice - The initial price in the shopping cart.
 * @constant {number} priceToAdd - The price of the item to be added or removed.
 * @constant {number} total - The expected total price after adding the item.
 */
const oldPrice = 6;
const priceToAdd = 4;
const total = 10;

/**
 * Test suite for the shopping cart total.
 * Using jest-chain to chain multiple assertions and jest-extended for specific assertions.
 * @namespace ShoppingCartTotal
 */
describe("Shopping cart total", () => {
  /**
   * Test case to verify that the shopping cart total is updated correctly after adding an item to the basket.
   * @function
   * @name ShoppingCartTotal#shouldUpdateShoppingCartTotalAfterAddingItemToBasket
   * @description This test checks if the total price is updated correctly when an item is added to the shopping cart.
   */
  it("should update shopping cart total after adding item to basket", () => {
    const result = add(oldPrice, priceToAdd);
    expect(result).toBe(total).toBeGreaterThan(oldPrice).toBeNumber();
  });

  /**
   * Test case to verify that the shopping cart total is updated correctly after removing an item from the basket.
   * @function
   * @name ShoppingCartTotal#shouldUpdateShoppingCartTotalAfterRemovingItemFromBasket
   * @description This test checks if the total price is updated correctly when an item is removed from the shopping cart.
   */
  it("should update shopping cart total after removing item from basket", () => {
    const result = add(total, -priceToAdd);
    expect(result).toBe(oldPrice).toBeLessThan(total).toBeNumber();
  });
});
