#
# @lc app=leetcode id=703 lang=python3
#
# [703] Kth Largest Element in a Stream
#

# @lc code=start
class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.heap = MinHeap(nums)
        self.k = k
        while self.heap.size() > k:
            self.heap.poll()

    def add(self, val: int) -> int:
        if self.heap.size() < self.k:
            self.heap.offer(val)
        elif self.heap.peek() < val:
            self.heap.offer(val)
            self.heap.poll()
        return self.heap.peek()

class MinHeap:
    def __init__(self, data: List[int]):
        self.data = data
        self.heapify()

    def size(self):
        return len(self.data)

    def heapify(self):
        if self.size() < 2: return
        for i in range(1, self.size()):
            self.bubbleUp(i)

    def peek(self):
        if self.size() == 0: return None
        return self.data[0]

    def offer(self, value: int):
        self.data.append(value)
        self.bubbleUp(self.size() - 1)

    def poll(self):
        if self.size() == 0: return None
        result = self.data[0]
        last = self.data.pop()
        if self.size() != 0:
            self.data[0] = last
            self.bubbleDown(0)

    def bubbleUp(self, index: int):
        while index > 0:
            parentIndex = (index - 1) >> 1
            if self.comparator(index, parentIndex):
                self.swap(index, parentIndex)
                index = parentIndex
            else: break

    def bubbleDown(self, index: int):
        lastIndex = self.size() - 1
        while True:
            leftIndex = index * 2 + 1
            rightIndex = index * 2 + 2
            findIndex = index
            if leftIndex <= lastIndex and self.comparator(leftIndex, findIndex):
                findIndex = leftIndex
            if rightIndex <= lastIndex and self.comparator(rightIndex, findIndex):
                findIndex = rightIndex
            if index != findIndex:
                self.swap(index, findIndex)
                index = findIndex
            else: break
    
    def comparator(self, index1: int, index2: int):
        return self.data[index1] - self.data[index2] < 0

    def swap(self, index1: int, index2: int):
        self.data[index1], self.data[index2] = self.data[index2], self.data[index1]

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
# @lc code=end

