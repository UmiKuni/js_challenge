/**
 * Problem 7: Array Reduce Transformation
 *
 * Given an integer array nums, a reducer function fn, and an initial value init,
 * return the final result of executing the fn function on each element of the array,
 * sequentially, passing in the return value from the calculation on the preceding element.
 *
 * This result is achieved through the following operations:
 * val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...
 * until every element in the array has been processed. The ultimate value of val is then returned.
 *
 * If the length of the array is 0, the function should return init.
 *
 * Please solve it without using the built-in Array.reduce method.
 *
 * Example 1:
 * Input: nums = [1,2,3,4], fn = function sum(accum, curr) { return accum + curr; }, init = 0
 * Output: 10
 *
 * Example 2:
 * Input: nums = [1,2,3,4], fn = function sum(accum, curr) { return accum + curr * curr; }, init = 100
 * Output: 130
 *
 * Constraints:
 * - 0 <= nums.length <= 1000
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= init <= 10^9
 */

function reduce(nums, fn, init) {
  let accum=init;
  for(let i=0;i<nums.length;i++){
    accum=fn(accum,nums[i]);
  }
  return accum;
}

module.exports = reduce;
