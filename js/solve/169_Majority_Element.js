/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let l = nums.length;
  let o = {};
  for (let i = 0; i < l; i++) {
    let prop = nums[i].toString();
    if (o[prop] === undefined) {
      o[prop] = 1;
    } else {
      o[prop]++;
    }
  }
  for (prop in o) {
    if (o[prop] >= l / 2) {
      return parseInt(prop, 10);
    }
  }
};
