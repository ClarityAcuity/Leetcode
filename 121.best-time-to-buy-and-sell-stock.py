#
# @lc app=leetcode id=121 lang=python3
#
# [121] Best Time to Buy and Sell Stock
#

# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = prices[0]
        diff = 0
        for x in prices:
            diff = max(diff, x - minPrice)
            if x < minPrice:
                minPrice = x
        return diff
# @lc code=end

