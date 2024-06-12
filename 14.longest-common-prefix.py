#
# @lc app=leetcode id=14 lang=python3
#
# [14] Longest Common Prefix
#

# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        common = ''
        if len(strs) == 0 or len(strs[0]) == 0: return common
        if len(strs) == 1: return strs[0]
        j = 0
        while True:
            for i in range(len(strs) - 1):
                if len(strs[i]) == j: return common
                if len(strs[i + 1]) == j: return common
                if strs[i][j] != strs[i + 1][j]: return common
            common += strs[0][j]
            j += 1

        
# @lc code=end

