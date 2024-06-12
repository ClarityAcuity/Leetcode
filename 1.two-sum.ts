/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const keyMap: object = { }
    for (let i: number = 0; i <= nums.length; i++) {
        keyMap[`${nums[i]}`] = i
    }
    for (let i: number = 0; i <= nums.length; i++) {
        let targetIndex: number | undefined = keyMap[target - nums[i]]
        if (targetIndex && i !== targetIndex) return [i, targetIndex] 
    }
};
// @lc code=end

