/**
 * Problem 10: Allow One Function Call
 *
 * Given a function fn, return a new function that is identical to the original function except that
 * it ensures fn is called at most once.
 *
 * The first time the returned function is called, it should return the same result as fn.
 * Every subsequent time it is called, it should return undefined.
 *
 * Example 1:
 * Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
 * Output: [{"calls":1,"value":6}]
 *
 * Example 2:
 * Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
 * Output: [{"calls":1,"value":140},{"calls":2,"value":undefined},{"calls":3,"value":undefined}]
 *
 * Constraints:
 * - calls is a valid JSON array
 * - 1 <= calls.length <= 10
 * - 1 <= calls[i].length <= 100
 * - 2 <= JSON.stringify(calls).length <= 1000
 */

function once(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
}

module.exports = once;
