/**
 * Problem 1: Create Hello World Function
 *
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 *
 * Example 1:
 * Input: args = []
 * Output: "Hello World"
 *
 * Example 2:
 * Input: args = [{}, null, 42]
 * Output: "Hello World"
 *
 * Constraints:
 * - 0 <= args.length <= 10
 */

function createHelloWorld() {
  return function (...args) {
    
    return "Hello World";
  };
}

module.exports = createHelloWorld;
