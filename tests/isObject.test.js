/**
 * @fileoverview This file contains unit tests for the isObject function,
 * Validating product objects in the warehouse system.
 *
 * @module tests/isObjectProductValidation.test
 */

import isObject from "../src/isObject.js";
import "jest-extended";
import "jest-chain";

/**
 * Test suite for validating product objects.
 * Uses jest-chain and jest-extended for enhanced assertions and readability.
 * @namespace ProductValidation
 */
describe("Product Validation: Object Detection", () => {
  /**
   * Test case to validate product objects.
   * @function
   * @name ProductValidation#shouldDetectProductObjects
   * @description Ensures that product objects are correctly identified as objects.
   */
  it("should detect product objects", () => {
    const product = { id: 1, name: "Laptop", price: 1000 };
    const productWithDetails = {
      id: 2,
      name: "Smartphone",
      price: 500,
      stock: 20,
    };

    expect(isObject(product)).toBe(true);
    expect(isObject(productWithDetails)).toBe(true);
  });

  /**
   * Test case to validate arrays of products.
   * @function
   * @name ProductValidation#shouldDetectArrayOfProducts
   * @description Ensures that arrays containing product objects are correctly identified as objects.
   */
  it("should detect arrays of products", () => {
    const products = [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Smartphone", price: 500 },
    ];

    expect(isObject(products)).toBe(true);
  });

  /**
   * Test case to reject non-object product data.
   * @function
   * @name ProductValidation#shouldRejectNonProductData
   * @description Ensures that non-object product data such as strings or numbers are rejected.
   */
  it("should reject non-object product data", () => {
    expect(isObject("Laptop")).toBe(false);
    expect(isObject(1000)).toBe(false);
    expect(isObject(true)).toBe(false);
  });
});
