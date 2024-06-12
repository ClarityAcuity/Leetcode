# formal solution
class Solution:
    def generateParenthesis(self, N):
        """
        type: number
        rtype List[str]
        """
        if N == 0:
            return ['']
        ans = []
        for c in range(N):
            for left in self.generateParenthesis(c):
                for right in self.generateParenthesis(N-1-c):
                    ans.append('({}){}'.format(left, right))
        return ans


print(Solution().generateParenthesis(3))
