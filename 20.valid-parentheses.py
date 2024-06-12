#
# @lc app=leetcode id=20 lang=python3
#
# [20] Valid Parentheses
#

# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        map = {
            ")": "(",
            "]": "[",
            "}": "{",
        }
        keys = map.keys()
        for i in range(len(s)):
            if not s[i] in keys:
                stack.append(s[i])
            elif len(stack) > 0 and stack[-1] == map[s[i]]:
                stack.pop()
            else:
                return False
        return len(stack) == 0

# @lc code=end

