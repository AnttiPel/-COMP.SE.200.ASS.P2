/**
 * @fileoverview This file contains unit tests for the keys function.
 * Tests product creation scenarios, by returning key.
 *
 * @module tests/keysProductCreation.test
 */

import keys from "../src/keys.js";
import "jest-extended";
import "jest-chain";

/**
 * Test suite for retrieving keys on product creation.
 * Uses jest-chain and jest-extended for enhanced assertions and readability.
 * @namespace ProductCreation
 */
describe("Product Creation: Keys Retrieval", () => {
  /**
   * Test case to validate that "IDs" are returned on "product creation".
   * @function
   * @name ProductCreation#shouldRetrieveKeysForProductArray
   * @description Ensures that the keys are returned on "product creation".
   */
  it("should retrieve keys for an array of product objects", () => {
    const products = [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Smartphone", price: 500 },
    ];

    const result = keys(products);
    expect(result).toEqual(["0", "1"]);
  });
});
