#
# @lc app=leetcode id=125 lang=python3
#
# [125] Valid Palindrome
#
import re
# @lc code=start
class Solution:
    def isPalindrome(self, s: str) -> bool:
        string = re.findall(r"[a-zA-Z0-9]", s)
        j = len(string) - 1
        for i in range(len(string) // 2):
            print(string[i], string[j])
            if string[i].lower() != string[j].lower(): return False
            j -= 1
        return True

# @lc code=end

