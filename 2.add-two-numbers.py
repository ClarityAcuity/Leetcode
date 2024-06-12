#
# @lc app=leetcode id=2 lang=python3
#
# [2] Add Two Numbers
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        result = ListNode(l1.val, l1.next)
        carry = 0
        current1 = result
        current2 = l2
        while current1 or current2:
            value1 = current1.val if current1 else 0
            value2 = current2.val if current2 else 0
            carry, out = divmod(value1 + value2 + carry, 10)
            current1.val = out
            if (current1 and not current1.next) and ((current2 and current2.next) or carry > 0):
                current1.next = ListNode(0)
            current1 = current1.next
            current2 = current2.next if current2 else None
        return result
            
# @lc code=end

