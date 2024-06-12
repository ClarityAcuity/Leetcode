#
# @lc app=leetcode id=13 lang=python3
#
# [13] Roman to Integer
#

# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        total = 0
        for i in range(len(s)):
            num = s[i]
            nextNum = s[i + 1] if i < len(s) - 1 else None
            if num == 'M':
                num = 1000
            elif num == 'D':
                num = 500
            elif num == 'C':
                if nextNum == 'M' or nextNum == 'D': num = -100
                else: num = 100
            elif num == 'L':
                num = 50
            elif num == 'X':
                if nextNum == 'C' or nextNum == 'L': num = -10
                else: num = 10
            elif num == 'V':
                num = 5
            elif num == 'I':
                if nextNum == 'X' or nextNum == 'V': num = -1
                else: num = 1
            total += num
        return total
# @lc code=end

