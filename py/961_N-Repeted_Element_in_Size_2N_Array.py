#85.46%
class Solution:
    def repeatedNTimes(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        n = [A[0]]
        for i in range(1, len(A)):
            for j in range(0, len(n)):
                if A[i] == n[j]:
                    return A[i]
                n.append(A[i])
            if i == len(A):
                return A[i]