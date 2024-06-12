#
# @lc app=leetcode id=70 lang=python3
#
# [70] Climbing Stairs
#

# @lc code=start

class Solution:
    def __init__(self):
        self.mem = { 0:0, 1:1, 2:2 }

    def climbStairs(self, n: int) -> int:
        if n in self.mem: return self.mem[n]
        else:
            self.mem[n] = self.climbStairs(n - 1) + self.climbStairs(n - 2)
            return self.mem[n]
# @lc code=end

