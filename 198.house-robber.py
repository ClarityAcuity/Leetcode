#
# @lc app=leetcode id=198 lang=python3
#
# [198] House Robber
#

# @lc code=start
class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums: return 0
        dp = [0] + nums
        if len(nums) < 2: return dp[len(nums)]
        for i in range(1, len(nums)):
            dp[i + 1] = max(dp[i - 1] + nums[i], dp[i])
        return dp[-1]
# @lc code=end

