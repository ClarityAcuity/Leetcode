#
# @lc app=leetcode id=98 lang=python3
#
# [98] Validate Binary Search Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
import math
class Solution:
    '''
    ref https://leetcode.com/problems/validate-binary-search-tree/discuss/114459/3-python-solutions-clamping-window-in-order-traversal
    '''
    def isValidBST(self, root: TreeNode) -> bool:
        if not root: return True
        return self.isValidNode(root, -math.inf, math.inf)

    def isValidNode(self, root, l, r):
        if not root: return True
        return (l < root.val < r and
            self.isValidNode(root.left, l, root.val) and
            self.isValidNode(root.right, root.val, r))

# @lc code=end

