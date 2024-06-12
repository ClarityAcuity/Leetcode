#
# @lc app=leetcode id=80 lang=python3
#
# [80] Remove Duplicates from Sorted Array II
#

# @lc code=start
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        while i + 2 < len(nums):
            if nums[i] == nums[i + 2]:
                nums.pop(i + 2)
            else:
                i += 1
        return len(nums)
# @lc code=end

