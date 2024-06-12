#
# @lc app=leetcode id=617 lang=python3
#
# [617] Merge Two Binary Trees
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(self, root1: TreeNode, root2: TreeNode) -> TreeNode:
        # if not root1 and not root2:
        #     return None
        # if not root1: return root2
        # if not root2: return root1
        # root1.val = root1.val + root2.val
        # root1.left = self.mergeTrees(root1.left, root2.left)
        # root1.right = self.mergeTrees(root1.right, root2.right)
        # return root1
        
        if root1 == None: return root2
        stack = []
        stack.append((root1, root2))
        while len(stack) > 0:
            t = stack.pop()
            if t[0] == None or t[1] == None: continue
            t[0].val += t[1].val
            if t[0].left == None: t[0].left = t[1].left
            else: stack.append((t[0].left, t[1].left))
            if t[0].right == None: t[0].right = t[1].right
            else: stack.append((t[0].right, t[1].right))
        return root1

# @lc code=end

