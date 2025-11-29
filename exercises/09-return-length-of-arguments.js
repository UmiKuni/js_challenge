/**
 * Problem 9: Return Length of Arguments Passed
 *
 * Write a function argumentsLength that returns the count of arguments passed to it.
 *
 * Example 1:
 * Input: args = [5]
 * Output: 1
 *
 * Example 2:
 * Input: args = [{}, null, "3"]
 * Output: 3
 *
 * Constraints:
 * - args is a valid JSON array
 * - 0 <= args.length <= 100
 */

function argumentsLength(...args) {
  return args.length;
}

module.exports = argumentsLength;
