#
# @lc app=leetcode id=217 lang=python3
#
# [217] Contains Duplicate
#

# @lc code=start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        sorts = sorted(nums)
        for i in range(1, len(sorts)):
            if sorts[i] == sorts[i-1]:
                return  True
        return False

# @lc code=end

