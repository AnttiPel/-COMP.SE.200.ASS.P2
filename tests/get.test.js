/**
 * @fileoverview This file contains unit tests for the get function.
 * Tests product search in an application.
 *
 * @module tests/getProductData.test
 */

import get from "../src/get.js";
import "jest-extended";
import "jest-chain";

/**
 * Test suite for the get product data.
 * Uses jest-chain and jest-extended for enhanced assertions and readability.
 * @namespace ProductDataAccess
 */
describe("Product data retrieval", () => {
  /**
   * Test case to retrieve product details in a search scenario.
   * @function
   * @name ProductDataAccess#shouldRetrieveProductDetailsInSearchScenario
   * @description Validates that the function can extract product details.
   */
  it("should retrieve product details in a search scenario", () => {
    const products = [
      { id: 1, details: { name: "Apple iPhone 13", price: 999 } },
      { id: 2, details: { name: "Samsung Galaxy S21", price: 799 } },
    ];
    const result = get(products[0], "details.name");

    expect(result).toBe("Apple iPhone 13");
  });

  /**
   * Test case to handle missing product details by returning a default value.
   * @function
   * @name ProductDataAccess#shouldReturnDefaultValueForMissingProductDetails
   * @description Validates that the function returns a default value when a product detail is missing.
   */
  it("should return a default value for missing product details", () => {
    const products = [
      { id: 1, details: { name: "Apple iPhone 13", price: 999 } },
      { id: 2, details: {} },
    ];
    const result = get(products[1], "details.name", "Unknown Product");

    expect(result).toBe("Unknown Product");
  });
});
