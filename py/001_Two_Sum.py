#
# @lc app=leetcode id=1 lang=python3
#
# [1] Two Sum
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        '''
        Create a dictionary of all elements of the array.
        Iterate through the array. From the target-value subtract the current array element and look for it in the map.
        If found the current value and the found element in the map will be the target sum pair.
        '''
        def twoSum(self, nums: list[int], target: int) -> list[int]:
            prevMap = {}
            for i, n in enumerate(nums):
                diff = target - n
                if diff in prevMap:
                    return [prevMap[diff], i]
                prevMap[n] = i
        return []
    
        # for i in range(len(nums)):
        #     for j in range(i + 1, len(nums)):
        #         if nums[i] + nums[j] == target:
        #             return [i, j]

# @lc code=end

