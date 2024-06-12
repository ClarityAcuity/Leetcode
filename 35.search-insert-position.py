#
# @lc app=leetcode id=35 lang=python3
#
# [35] Search Insert Position
#

# @lc code=start
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        if not nums: return 0
        elif target <= nums[0]: return 0
        elif target > nums[-1]: return right + 1
        elif target == nums[-1]: return right
        while left < right:
            half = left + (right - left) // 2
            val = nums[half]
            if val > target:
                right = half
            elif val < target:
                left = half
            else: return half
            if right == left + 1:
                return right
# @lc code=end

