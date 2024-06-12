#
# @lc app=leetcode id=373 lang=python3
#
# [373] Find K Pairs with Smallest Sums
#

# @lc code=start
class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        result = list()
        i = 0
        j = 0
        while k > 0:
            print(i, j, k)
            result.append((nums1[i], nums2[j]))
            if i == len(nums1) - 1 and j == len(nums2) - 1:
                k = 0
            elif i < len(nums1) - 1 and j < len(nums2) - 1:
                if nums1[i + 1] < nums2[j + 1]: i += 1
                else: j += 1
            elif j == len(nums2) - 1: i += 1
            elif i == len(nums1) - 1: j += 1
            # elif j == len(nums2) - 1 and i == len(nums1) - 1:
            #     i += 1
            # elif i == len(nums1) - 1 and j == len(nums2) - 1:
            #     j += 1
            k -= 1
            
        return result

# @lc code=end

