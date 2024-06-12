#
# @lc app=leetcode id=36 lang=python3
#
# [36] Valid Sudoku
#

# @lc code=start
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        return self.isRowValid(board) and self.isColumnValid(board) and self.isGridValid(board)
        
    def isRowValid(self, board):
        n = len(board)
        isValid = True
        for nums in board:
            if self.isListValid(nums) == False:
                return False
        return True

    def isColumnValid(self, board):
        n = len(board)
        columns = [None] * n
        for i in range(n):
            for j in range(n):
                if columns[j] == None:
                    columns[j] = [board[i][j]]
                else:
                    columns[j].append(board[i][j])
        return self.isRowValid(columns)

    def isGridValid(self, board):
        n = len(board) // 3
        grids = [None] * len(board)
        for i in range(n):
            for j in range(n):
                for a in range(n):
                    for b in range(n):
                        if grids[i*n + j] == None:
                            grids[i*n + j] = [board[i*n + a][j*n + b]]
                        else:
                            grids[i*n + j].append(board[i*n + a][j*n + b])
        return self.isRowValid(grids)

    def isListValid(self, nums):
        map = dict()
        for i in nums:
            if i.isdigit():
                if i in map:
                    return False
                else:
                    map[i] = True
        return True


# @lc code=end

