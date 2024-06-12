#
# @lc app=leetcode id=118 lang=python3
#
# [118] Pascal's Triangle
#

# @lc code=start
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        triangle = [[1]]
        round = 2
        while numRows >= round:
            row = [1]
            for i in range(1, round - 1):
                preRow = triangle[round - 2]
                row.append(preRow[i - 1] + preRow[i])
            row.append(1)        
            triangle.append(row)
            round += 1
        return triangle

# @lc code=end

