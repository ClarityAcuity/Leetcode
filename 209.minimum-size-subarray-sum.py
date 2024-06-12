#
# @lc app=leetcode id=209 lang=python3
#
# [209] Minimum Size Subarray Sum
#

# @lc code=start
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        right = 0
        total = 0
        result = len(nums) + 1
        for right in range(len(nums)):
            total += nums[right]
            while total >= target:
                result = min(result, right + 1 - left)
                total -= nums[left]
                left += 1
        return result if result <= len(nums) else 0


# @lc code=end

