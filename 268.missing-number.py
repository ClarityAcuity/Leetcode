#
# @lc app=leetcode id=268 lang=python3
#
# [268] Missing Number
#

# @lc code=start
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        # return int(len(nums) * (len(nums) + 1) / 2 - sum(nums))
        missing = len(nums)
        for i, num in enumerate(nums):
            missing ^= i ^ num
        return missing
# @lc code=end

