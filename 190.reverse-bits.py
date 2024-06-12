#
# @lc app=leetcode id=190 lang=python3
#
# [190] Reverse Bits
#
import math
# @lc code=start
class Solution:
    def reverseBits(self, n: int) -> int:
        rev = 0
        num = n
        for i in range(32):
            rev += ((num % 2) * math.pow(2, 31 - i))
            num //= 2
            if num == 0: break
        return int(rev)
# @lc code=end

