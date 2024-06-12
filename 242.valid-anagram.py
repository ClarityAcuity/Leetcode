#
# @lc app=leetcode id=242 lang=python3
#
# [242] Valid Anagram
#
import collections
# @lc code=start
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        countS = collections.Counter(s)
        countT = collections.Counter(t)
        for i,k in enumerate(countS):
            if countS[k] != countT[k]: return False
        return True
# @lc code=end

