#
# @lc app=leetcode id=101 lang=python3
#
# [101] Symmetric Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        queue = list()
        queue.append(root)
        queue.append(root)
        while len(queue) > 0:
            t1 = queue.pop()
            t2 = queue.pop()
            if t1 == None and t2 == None: continue
            if t1 == None or t2 == None: return False
            if t1.val != t2.val: return False
            queue.append(t1.left)
            queue.append(t2.right)
            queue.append(t1.right)
            queue.append(t2.left)
        return True

    # def isSymmetric(self, root: TreeNode) -> bool:
    #     if not root: return True
    #     return self.isSame(root.left, root.right)

    # def isSame(self, left, right):
    #     if not left and not right: return True
    #     if left and right:
    #         return (left.val == right.val and
    #         self.isSame(left.left, right.right) and
    #         self.isSame(left.right, right.left))
    #     return False
# @lc code=end

