#
# @lc app=leetcode id=53 lang=python3
#
# [53] Maximum Subarray
#

# @lc code=start
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        currentSum = maxSum = nums[0]
        for num in nums[1:]:
            currentSum = max(num, currentSum + num)
            maxSum = max(maxSum, currentSum)
        return maxSum

# @lc code=end

