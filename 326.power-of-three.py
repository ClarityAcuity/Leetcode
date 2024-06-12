#
# @lc app=leetcode id=326 lang=python3
#
# [326] Power of Three
#
import math
# @lc code=start
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n <= 0: return False
        while n > 1:
            if n % 3 != 0: return False
            n //= 3
        return True

    # def isDivideByThree(self, n: int) -> bool:
    #     return sum(int(i) for i in str(n)) % 3 == 0


# @lc code=end
