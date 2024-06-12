#
# @lc app=leetcode id=347 lang=python3
#
# [347] Top K Frequent Elements
#

# @lc code=start
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map = {}
        for num in nums:
            map[num] = map[num] + 1 if num in map else 1
        h = []
        for num in map:
            heappush(h, (num, map[num]))
        return [num[0] for num in nlargest(k, h, key = self.getKey)]

    def getKey(self, h):
        return h[1]
# @lc code=end

