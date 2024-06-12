#
# @lc app=leetcode id=21 lang=python3
#
# [21] Merge Two Sorted Lists
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        # current = lists = ListNode()
        # while l1 and l2:
        #     if l1.val < l2.val:
        #         next = l1.next
        #         current.next = l1
        #         l1 = next
        #     else:
        #         next = l2.next
        #         current.next = l2
        #         l2 = next
        #     current = current.next
        # current.next = l1 or l2
        # return lists.next
        if not l1 or not l2:
            return l1 or l2
        if l1.val < l2.val:
            l1.next = self.mergeTwoLists(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists(l1, l2.next)
            return l2
# @lc code=end

