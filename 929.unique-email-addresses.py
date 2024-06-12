#
# @lc app=leetcode id=929 lang=python3
#
# [929] Unique Email Addresses
#

# @lc code=start
class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        mailDict = {}
        for email in emails:
            [local, domain] = email.split('@')
            local = local.split('+').pop(0)
            local = local.replace('.', '')
            mailDict[f'{local}@{domain}'] = True
        return sum(1 for email in mailDict)

# @lc code=end

