/**
 * @fileoverview This file contains unit tests for the filter function.
 * Tests product search bar for filtering products.
 *
 * @module tests/filterProduct.test
 */

import filter from "../src/filter.js";
import "jest-extended";
import "jest-chain";

/**
 * Test suite for the filter products.
 * Uses jest-chain and jest-extended for enhanced assertions and readability.
 * @namespace ProductFiltering
 */
describe("Product Filtering", () => {
  /**
   * Test case to search where products match the search query.
   * @function
   * @name ProductFiltering#shouldFilterProductsBasedOnSearchQuery
   * @description This test ensures that the function filters products whose names match the search query.
   */
  it("should filter products based on search query", () => {
    const products = [
      { id: 1, name: "Apple iPhone 13" },
      { id: 2, name: "Samsung Galaxy S21" },
      { id: 3, name: "Google Pixel 6" },
    ];
    const query = "Apple";
    const result = filter(products, (product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    expect(result)
      .toEqual([{ id: 1, name: "Apple iPhone 13" }])
      .toBeArray()
      .toHaveLength(1);
  });

  /**
   * Test case to verify that the search bar returns no results for unmatched queries.
   * @function
   * @name ProductFiltering#shouldReturnNoResultsForUnmatchedQuery
   * @description This test checks if the function returns an empty array when no products match the search query.
   */
  it("should return no results for unmatched search query", () => {
    const products = [
      { id: 1, name: "Apple iPhone 13" },
      { id: 2, name: "Samsung Galaxy S21" },
      { id: 3, name: "Google Pixel 6" },
    ];
    const query = "Nokia";
    const result = filter(products, (product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    expect(result).toEqual([[]]).toBeArray().toHaveLength(1);
  });

  /**
   * Test case to verify behavior with an empty product list.
   * @function
   * @name ProductFiltering#shouldReturnEmptyForEmptyProductList
   * @description This test checks if the function returns an empty array when the input product list is empty.
   */
  it("should return an empty array for empty product list", () => {
    const result = filter([], (product) =>
      product.name.toLowerCase().includes("Apple")
    );

    expect(result).toEqual([[]]).toBeArray().toHaveLength(1);
  });

  /**
   * Test case to search where case-insensitive matches are verified.
   * @function
   * @name ProductFiltering#shouldMatchCaseInsensitiveQuery
   * @description This test ensures that the function matches product names irrespective of the case of the search query.
   */
  it("should match products with case-insensitive query", () => {
    const products = [
      { id: 1, name: "Apple iPhone 13" },
      { id: 2, name: "Samsung Galaxy S21" },
      { id: 3, name: "Google Pixel 6" },
    ];
    const query = "apple";
    const result = filter(products, (product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    expect(result)
      .toEqual([{ id: 1, name: "Apple iPhone 13" }])
      .toBeArray()
      .toHaveLength(1);
  });
});
