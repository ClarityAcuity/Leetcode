#
# @lc app=leetcode id=7 lang=python3
#
# [7] Reverse Integer
#

# @lc code=start
class Solution:
    def reverse(self, x: int) -> int:
        return 0 if int(str(abs(x))[::-1]) > 2 ** 31 - 1 else int(('' if x > 0 else '-') + str(abs(x))[::-1])
# @lc code=end-

