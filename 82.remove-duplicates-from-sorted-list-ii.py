#
# @lc app=leetcode id=82 lang=python3
#
# [82] Remove Duplicates from Sorted List II
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        pivot = ListNode(0, head)
        previous = pivot
        current = pivot.next
        while current:
            if current.next and current.val == current.next.val:
                while current.next and current.val == current.next.val:
                    current = current.next
                previous.next = current.next
            else:
                previous = previous.next
            current = current.next
        return pivot.next
# @lc code=end

