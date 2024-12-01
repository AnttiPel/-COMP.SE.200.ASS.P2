/**
 * @fileoverview This file contains unit tests for the memoize function.
 * Tests memoization of product data works correctly by caching.
 *
 * @module tests/memoizeProductCaching.test
 */

import memoize from "../src/memoize";
import "jest-extended";
import "jest-chain";

const fetchProductData = (productId) => {
  return { id: productId, name: `Product ${productId}`, price: 1000 };
};

/**
 * Test suite for memoization of product data.
 * Uses jest-chain and jest-extended for enhanced assertions and readability.
 * @namespace ProductCaching
 */
describe("Backend to Frontend caching", () => {
  /**
   * Test case to validate that product data is cached after the first retrieval.
   * @function
   * @name ProductCaching#shouldCacheProductDataOnFirstFetch
   * @description Ensures that the first fetch of product is cached for future use.
   */
  it("should cache product data on first fetch", () => {
    const memoizedFetchProductData = memoize(fetchProductData);
    const result1 = memoizedFetchProductData(1);
    expect(result1).toEqual({ id: 1, name: "Product 1", price: 1000 });
    expect(memoizedFetchProductData.cache.size).toBe(1);
  });

  /**
   * Test case to validate that different products are in separate cache entries.
   * @function
   * @name ProductCaching#shouldCacheDifferentProductIdsSeparately
   * @description Ensures that different products are cached separately.
   */
  it("should cache different product IDs separately", () => {
    const memoizedFetchProductData = memoize(fetchProductData);
    const result1 = memoizedFetchProductData(1);
    expect(result1).toEqual({ id: 1, name: "Product 1", price: 1000 });

    const result2 = memoizedFetchProductData(2);
    expect(result2).toEqual({ id: 2, name: "Product 2", price: 1000 });
    expect(memoizedFetchProductData.cache.size).toBe(2);
    expect(result1).not.toBe(result2);

    const result3 = memoizedFetchProductData(1);
    expect(result1).toBe(result3);
  });

  /**
   * Test case to validate that an error is thrown when a non-function is passed to memoize.
   * @function
   * @name ProductCaching#shouldThrowErrorForNonFunction
   * @description Ensures that memoize throws a TypeError when a non-function is passed for some reason.
   */
  it("should throw an error when a non-function is passed", () => {
    expect(() => memoize(null)).toThrow(TypeError);
  });
});
