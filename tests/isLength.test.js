/**
 * @fileoverview This file contains unit tests for the isLength function.
 * The tests validate product counts in a warehouse.
 *
 * @module tests/isProductCountLength.test
 */

import isLength from "../src/isLength.js";
import "jest-extended";
import "jest-chain";

/**
 * Test suite for the product count.
 * Uses jest-chain and jest-extended for enhanced assertions and readability.
 * @namespace ProductCountValidation
 */
describe("Basic Jest Test: Length Validation", () => {
  /**
   * Test case to validate product counts in a warehouse.
   * @function
   * @name ProductCountValidation#shouldValidateProductCounts
   * @description Validates that product counts in a warehouse are valid lengths.
   */
  it("should validate product counts in a warehouse", () => {
    const productCounts = [0, 10, 250, 9007199254740991];
    const areCountsValid = productCounts.every(isLength);

    expect(areCountsValid).toBe(true);
  });

  /**
   * Test case to reject invalid product counts in a warehouse.
   * @function
   * @name ProductCountValidation#shouldRejectInvalidProductCounts
   * @description Validates that invalid product counts in a warehouse are correctly rejected.
   */
  it("should reject invalid product counts in a warehouse", () => {
    const productCounts = [-1, Infinity, 1.5, "100"];
    const areCountsValid = productCounts.every(isLength);

    expect(areCountsValid).toBe(false);
  });

  /**
   * Test case to handle an empty product count array.
   * @function
   * @name ProductCountValidation#shouldHandleEmptyProductCountArray
   * @description Ensures that the function handles an empty array of product counts gracefully.
   */
  it("should handle an empty product count array", () => {
    const productCounts = [];
    const areCountsValid = productCounts.every(isLength);

    expect(areCountsValid).toBe(true);
  });

  /**
   * Test case to validate a single product count.
   * @function
   * @name ProductCountValidation#shouldValidateSingleProductCount
   * @description Ensures that a single product count is correctly validated.
   */
  it("should validate a single product count", () => {
    const productCount = 250;
    const isValid = isLength(productCount);

    expect(isValid).toBe(true);
  });

  /**
   * Test case to reject a single invalid product count.
   * @function
   * @name ProductCountValidation#shouldRejectSingleInvalidProductCount
   * @description Ensures that a single invalid product count is correctly rejected.
   */
  it("should reject a single invalid product count", () => {
    const productCount = -250;
    const isValid = isLength(productCount);

    expect(isValid).toBe(false);
  });
});
