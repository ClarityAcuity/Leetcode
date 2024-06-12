#
# @lc app=leetcode id=350 lang=python3
#
# [350] Intersection of Two Arrays II
#

# @lc code=start
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = []
        less = sorted(nums2) if len(nums1) > len(nums2) else sorted(nums1)
        more = sorted(nums1) if len(nums1) > len(nums2) else sorted(nums2)
        for i in less:
            print(more)
            d = (len(more) + 1) // 2
            j = 0
            while i != more[j] and d > 0:
                if i > more[j]:
                    j = min(j + d, len(more) - 1)
                else:
                    j = j - d
                d = d // 2
            print(j, d)
            if i == more[j]:
                result.append(i)
                del more[j]
        return result
# @lc code=end

