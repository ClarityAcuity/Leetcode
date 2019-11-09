# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
#12.80%
class Solution:
    def leafSimilar(self, root1, root2):
        """
        :type root1: TreeNode
        :type root2: TreeNode
        :rtype: bool
        """
        a=self.leafSequence(root1,[])
        b=self.leafSequence(root2,[])
        #print(a,b)
        if len(a)!=len(b):
            return False
        for i in range(0,len(a)):
            if a[i]!=b[i]:
                return False
        return True
        
    def leaf(self,node):
        if not node.left and not node.right:
            return True
        else:
            return False

    def leafSequence(self,root,s=[]):
        if self.leaf(root):
            s.append(root.val)
        if root.left:
            if self.leaf(root.left):
                s.append(root.left.val)
            else:
                self.leafSequence(root.left,s)
        if root.right:
            if self.leaf(root.right):
                s.append(root.right.val)
            else:
                self.leafSequence(root.right,s)
        #print(root.val,s)
        return s

''' best answer
def leafSimilar(self, root1, root2):
        def dfs(node):
            if not node: return
            if not node.left and not node.right: yield node.val
            for i in dfs(node.left): yield i
            for i in dfs(node.right): yield i
        return all(a == b for a, b in itertools.izip_longest(dfs(root1), dfs(root2))
'''