#32.59%
class Solution:
    def sortArrayByParity(self, A):
        """
        :type A: List[int]
        :rtype: List[int]
        """
        return self.evenArray(A) + self.oddArray(A)
        
    def oddArray(self,A):
        r=[]
        for i in range(0,len(A)):
            if A[i]%2!=0:
                r.append(A[i])
        return r
    
    def evenArray(self,A):
        r=[]
        for i in range(0,len(A)):
            if A[i]%2==0:
                r.append(A[i])
        return r
