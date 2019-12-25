/**
 * @param {number[]} nums
 * @return {number}
 */
// Brute Force
// var findUnsortedSubarray = function(nums) {
//   const len = nums.length;
//   let last = 0;
//   let first = len;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[j] < nums[i]) {
//         last = Math.max(last, j);
//         first = Math.min(first, i);
//       }
//     }
//   }
//   return last - first > 0 ? last - first + 1 : 0;
// };

// var findUnsortedSubarray = function(nums) {
//   const sortNums = nums.slice().sort((a, b) => a - b);
//   const len = nums.length;
//   let first = len;
//   let last = 0;
//   for (let i = 0; i < len; i++) {
//     if (sortNums[i] !== nums[i]) {
//       if (first === len) {
//         first = i;
//       } else {
//         last = i;
//       }
//     }
//   }
//   return last - first > 0 ? last - first + 1 : 0;
// };

// use stack
// var findUnsortedSubarray = function(nums) {
//   let stack = [];
//   let first = nums.length;
//   let last = 0;
//   console.log(nums);
//   for (let i = 0; i < nums.length; i++) {
//     console.log(stack);
//     while (stack.length && nums[stack.slice(-1)[0]] > nums[i]) {
//       first = Math.min(first, stack.pop());
//       console.log(first);
//     }
//     stack.push(i);
//   }
//   stack = [];
//   for (let i = nums.length - 1; i >= 0; i--) {
//     console.log(stack);
//     while (stack.length && nums[stack.slice(-1)[0]] < nums[i]) {
//       last = Math.max(last, stack.pop());
//       console.log(last);
//     }
//     stack.push(i);
//   }
//   return last - first > 0 ? last - first + 1 : 0;
// };

// no extra space
var findUnsortedSubarray = function(nums) {
  console.log(nums);
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  let flag = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) flag = true;
    if (flag) min = Math.min(min, nums[i]);
  }
  flag = false;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) flag = true;
    if (flag) max = Math.max(max, nums[i]);
  }
  console.log(min, max);
  let l, r;
  for (l = 0; l < nums.length; l++) {
    if (min < nums[l]) break;
  }
  for (r = nums.length - 1; r >= 0; r--) {
    if (max > nums[r]) break;
  }
  console.log(l, r);
  return r - l < 0 ? 0 : r - l + 1;
};

// wrong, not consider full sub array element
// var findUnsortedSubarray = function(nums) {
//   let first = -1;
//   let last = 0;
//   let tmp = Number.NEGATIVE_INFINITY;
//   let len = nums.length;
//   for (let i = 1; i < len; i++) {
//     tmp = Math.max(nums[i - 1], tmp);
//     if (tmp > nums[i]) {
//       if (first === -1) {
//         first = i - 1;
//       }
//       last = i;
//     } else if (tmp === nums[i]) {
//       if (first === -1) {
//         first = i - 1;
//       }
//     }
//     console.log(tmp, nums[i], first, last);
//   }
//   if (last === 0) {
//     return last;
//   }
//   return last - first + 1;
// };

// let nums = [2, 6, 4, 8, 10, 9, 15];
// let nums = [1, 2, 3, 4];
// let nums = [5, 4, 3, 2, 1];
// let nums = [1, 3, 2, 2, 2];
// let nums = [2, 3, 3, 2, 4];
// let nums = [1, 2, 3, 3, 3];
// let nums = [1, 2, 4, 5, 3];
let nums = [9, 2, 3, 4, 1, 2, 3, 1, 100, 101, 102, 103];
console.log("ans =", findUnsortedSubarray(nums));
