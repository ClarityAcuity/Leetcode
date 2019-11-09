#88.31%
class Solution:
    def findWords(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        r=[]
        for i in range(0,len(words)):
            row=self.inRow(words[i][0].lower())
            #print(row,words[i])
            if len(words[i])==1:
                r.append(words[i])
            for j in range(1,len(words[i])):
                if self.inRow(words[i][j].lower())!=row:
                    break
                elif j==len(words[i])-1:
                    r.append(words[i])
        return r
    
    def inRow(self, word):
        key={
            'one':['q','w','e','r','t','y','u','i','o','p'],
            'two':['a','s','d','f','g','h','j','k','l'],
            'three':['z','x','c','v','b','n','m']
        }
        #print(key['one'])
        if word in key['one']:
            return 'one'
        if word in key['two']:
            return 'two'
        return 'three'