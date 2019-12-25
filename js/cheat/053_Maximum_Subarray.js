/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let len = nums.length;
  let dp = nums[0];
  let max = dp;

  for (let i = 1; i < len; i++) {
    dp = Math.max(dp + nums[i], nums[i]);
    max = Math.max(max, dp);
  }
  return max;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
