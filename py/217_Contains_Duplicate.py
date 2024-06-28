#
# @lc app=leetcode id=217 lang=python3
#
# [217] Contains Duplicate
#

# @lc code=start
class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        hashset = set()
        for n in nums:
            if n in map_dict: return True
            hashset.add(n)
        return False

# @lc code=end

