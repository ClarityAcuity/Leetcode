#
# @lc app=leetcode id=19 lang=python3
#
# [19] Remove Nth Node From End of List
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        l = 0
        dummy = ListNode()
        dummy.next = head
        current = head
        while current != None:
            l += 1
            current = current.next
        step = l - n
        current = dummy
        while step > 0:
            step -= 1
            current = current.next
        current.next = current.next.next
        return dummy.next

# @lc code=end

