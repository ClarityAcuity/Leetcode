#
# @lc app=leetcode id=238 lang=python3
#
# [238] Product of Array Except Self
#

# @lc code=start
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = []
        product = 1
        for i in range(len(nums)):
            result.append(product)
            product *= nums[i]
        product = 1
        for i in reversed(range(len(nums))):
            result[i] *= product
            product *= nums[i]
        return result
# @lc code=end

