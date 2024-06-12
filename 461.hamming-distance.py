#
# @lc app=leetcode id=461 lang=python3
#
# [461] Hamming Distance
#

# @lc code=start
class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        count = 0
        num = x ^ y
        while num > 0:
            count += 1
            num &= (num - 1)
        return count
# @lc code=end

