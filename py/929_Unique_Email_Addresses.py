
class Solution:
    def numUniqueEmails(self, emails):
        """
        :type emails: List[str]
        :rtype: int
        """
        l=[]
        for i in range(0,len(emails)):
            nl=emails[i].split('@')
            domain=nl[1]
            name = self.plus(self.dot(nl[0]))
            email=name+'@'+domain
            #print(email)
            if i==0:
                l.append(email)
            for j in range(0,len(l)):
                if email==l[j]:
                    break
                elif j==len(l)-1:
                    l.append(email)
            if i==len(emails)-1:
                return len(l)
    
    def dot(self,str):
        r=''
        a = str.split('.')
        for i in range(0,len(a)):
            r+=a[i]
        return r
        
    def plus(self,str):
        a = str.split('+')
        return a[0]
        