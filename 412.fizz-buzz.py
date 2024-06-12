#
# @lc app=leetcode id=412 lang=python3
#
# [412] Fizz Buzz
#

# @lc code=start
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        foo = []
        for i in range(1, n + 1):
            bar = ''
            if i % 3 == 0:
                bar += 'Fizz'
            if i % 5 == 0:
                bar += 'Buzz'
            if i % 3 != 0 and i % 5 != 0:
                bar = str(i)
            foo.append(bar)
        return foo
# @lc code=end

