#
# @lc app=leetcode id=88 lang=python3
#
# [88] Merge Sorted Array
#

# @lc code=start
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        s1 = 0
        s2 = 0
        origin = nums1.copy()
        nums1.clear()
        while s1 < m or s2 < n:
            if n == 0 or s2 == n or (origin[s1] <= nums2[s2] and s1 < m):
                nums1.append(origin[s1])
                s1 += 1
            elif m == 0 or s1 == m or (origin[s1] > nums2[s2] and s2 < n):
                nums1.append(nums2[s2])
                s2 += 1
            else: break
            
        
# @lc code=end

