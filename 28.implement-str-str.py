#
# @lc app=leetcode id=28 lang=python3
#
# [28] Implement strStr()
#

# @lc code=start
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(needle) == 0: return 0
        if len(haystack) < len(needle): return -1
        i = 0
        while i <= len(haystack) - len(needle):
            for j in range(0, len(needle)):
                if haystack[i + j] != needle[j]:
                    i += 1
                    break
                elif j == len(needle) - 1:
                    return i
        return -1
                
# @lc code=end

