/**
 * @fileoverview This file contains unit tests for the isBoolean function.
 * Tests verifying payment success in a transaction scenario.
 *
 * @module tests/isTransactionCompletionBoolean.test
 */

import isBoolean from "../src/isBoolean.js";
import "jest-extended";
import "jest-chain";

/**
 * Test suite for the third-party payment transaction.
 * Uses jest-chain and jest-extended for enhanced assertions and readability.
 * @namespace TransactionCheck
 */
describe("Third-party transaction completion on purchase", () => {
  /**
   * Test case for verifying transaction completion status from a third-party API.
   * @function
   * @name TransactionCheck#shouldVerifyTransactionCompletion
   * @description Validates the transaction completion status based on boolean response from a third-party API.
   */
  it("should verify transaction completion from third-party API", () => {
    const apiResponse = { success: true };
    const isPaymentSuccessful =
      isBoolean(apiResponse.success) && apiResponse.success;

    expect(isPaymentSuccessful).toBe(true).toBeBoolean();
  });

  /**
   * Test case for handling failed transactions from a third-party API.
   * @function
   * @name TransactionCheck#shouldHandleFailedTransaction
   * @description Validates handling of failed transactions based on the API response.
   */
  it("should handle failed transactions from third-party API", () => {
    const apiResponse = { success: false };
    const isPaymentSuccessful =
      isBoolean(apiResponse.success) && apiResponse.success;

    expect(isPaymentSuccessful).toBe(false).toBeBoolean();
  });

  /**
   * Test case to handle unexpected API responses where success is not a boolean or invalid.
   * @function
   * @name TransactionCheck#shouldHandleUnexpectedApiResponse
   * @description Ensures the function handles unexpected API responses gracefully.
   */
  it("should handle unexpected API responses", () => {
    const apiResponse = { success: "unknown" };
    const isPaymentSuccessful =
      isBoolean(apiResponse?.success) && apiResponse?.success;

    expect(isPaymentSuccessful).toBe(false);
  });
});
