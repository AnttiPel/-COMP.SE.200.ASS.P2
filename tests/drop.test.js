/**
 * @fileoverview This file contains unit tests for the drop function.
 * The tests ensure that the product list is correctly updated when products are removed from the list.
 *
 * @module tests/dropProduct.test
 */

import drop from "../src/drop.js";
import "jest-extended";
import "jest-chain";

/**
 * Global variables used in the tests for readability.
 * @constant {number[]} array - The initial array used in the test cases.
 */
const array = [1, 2, 3];

/**
 * Test suite for the drop product.
 * Using jest-chain to chain multiple assertions and jest-extended for specific assertions.
 * @namespace ProductDeletion
 */
describe("Product deletion", () => {
  /**
   * Test case to verify that the first product is removed from the array.
   * @function
   * @name ProductDeletion#shouldDeleteFirstProduct
   * @description This test checks if the first element is removed when no second argument is provided.
   */
  it("should delete first product", () => {
    const result = drop(array);
    expect(result).toEqual([2, 3]).toBeArray().toHaveLength(2);
  });

  /**
   * Test case to verify that the first two products are removed from the array.
   * @function
   * @name ProductDeletion#shouldDeleteFirstTwoProducts
   * @description This test checks if the first two elements are removed when the second argument is 2.
   */
  it("should delete first two products", () => {
    const result = drop([1, 2, 3], 2);
    expect(result).toEqual([3]).toBeArray().toHaveLength(1);
  });

  /**
   * Test case to verify that all products are removed when the number of elements to drop exceeds the array length.
   * @function
   * @name ProductDeletion#shouldDeleteAllProducts
   * @description This test checks if the resulting array is empty when the second argument exceeds the array length.
   */
  it("should delete first five products (all)", () => {
    const result = drop(array, 5);
    expect(result).toEqual([]).toBeArray().toHaveLength(0);
  });

  /**
   * Test case to verify that no products are removed when the second argument is 0.
   * @function
   * @name ProductDeletion#shouldNotDeleteAnyProducts
   * @description This test checks if the array remains unchanged when the second argument is 0.
   */
  it("should not delete any products", () => {
    const result = drop(array, 0);
    expect(result).toEqual([1, 2, 3]).toBeArray().toHaveLength(3);
  });
});
