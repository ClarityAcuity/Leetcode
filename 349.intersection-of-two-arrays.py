#
# @lc app=leetcode id=349 lang=python3
#
# [349] Intersection of Two Arrays
#

# @lc code=start
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        numMap = {}
        result = []
        for i in nums1:
            numMap[i] = True
        for j in nums2:
            if j in numMap and numMap[j]:
                numMap[j] = False
                result.append(j)
        return result
# @lc code=end

