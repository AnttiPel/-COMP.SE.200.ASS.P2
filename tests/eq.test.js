/**
 * @fileoverview This file contains unit tests for the eq function.
 * These tests test search bar feature from the application for exact product search.
 *
 * @module tests/eqProduct.test
 */

import eq from "../src/eq.js";
import "jest-extended";
import "jest-chain";

/**
 * Test suite for the product exact search.
 * Using jest-chain to chain multiple assertions and jest-extended for enhanced test readability.
 * @namespace ExactProduct
 */
describe("Product search", () => {
  /**
   * Test case for search bar scenario where exact product is foud.
   * @function
   * @name ExactProduct#shouldReturnTrueForMatchingSearchQuery
   * @description This test checks if true when the search query matches the product.
   */
  it("should return true for matching search query", () => {
    const storedQuery = "apple";
    const userInput = "apple";
    const result = eq(storedQuery, userInput);
    expect(result).toBe(true).toBeBoolean();
  });

  /**
   * Test case for search bar scenario where query results do not match.
   * @function
   * @name ExactProduct#shouldReturnFalseForNonMatchingSearchQuery
   * @description This test checks if false when the search query does not match the product.
   */
  it("should return false for non-matching search query", () => {
    const storedQuery = "apple";
    const userInput = "orange";
    const result = eq(storedQuery, userInput);
    expect(result).toBe(false).toBeBoolean();
  });
});
