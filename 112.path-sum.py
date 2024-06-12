#
# @lc app=leetcode id=112 lang=python3
#
# [112] Path Sum
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: TreeNode, targetSum: int) -> bool:
        if not root: return False
        # if root.left or root.right:
        #     restSum = targetSum - root.val
        #     return self.hasPathSum(root.left, restSum) or \
        #         self.hasPathSum(root.right, restSum)
        # return root.val == targetSum
        queue = [(root, targetSum)]
        while len(queue):
            (node, sum) = queue.pop(0)
            sum -= node.val
            print(node, sum)
            if not node.left and not node.right:
                if sum == 0: return True
            if node.left: queue.append((node.left, sum))
            if node.right: queue.append((node.right, sum))
        return False
# @lc code=end

