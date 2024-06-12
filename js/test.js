// Data Structure TODO

// Reverse Sub Linked List (just for training, space O(n))

// Double Stack implement Queue (double queue impl stack is brute-force not realistic)

// Monotone Stack (nextGreaterElement)

// Monotone Queue (Deque maxSlidingWindow)

// Binary Search Tree

// Binary Heap

// LRU (Hash X Double Linked List)

// Algorithm TODO

// prime number calculate (Sieve of Eratosthenes)

// a^b mod c

const A = [5, 7, 7, 8, 8, 10]
const B = 8

function searchRange(A, B){
    const l = A.length
    let mid = Math.floor(l / 2)
    let start = 0
    let end = l - 1

    while (l && (A[start] <= B && A[end] >= B)) {
        if (A[mid] < B) {
            const [s, e] = searchRange(A.slice(mid + 1, end), B);
            start = mid + 1 + s;
            end = mid + 1 + e
        } else if (A[mid] > B) {
            const [s, e] = searchRange(A.slice(0, mid), B)
            start = s;
            end = e
        } if (A[mid] === B && (start !== mid || end !== mid )) {
            const [s] = searchRange(A.slice(0, mid), B)
            const [,e] = searchRange(A.slice(mid + 1, end), B);
            start = s;
            end = e + 1 + mid
        } else {
            return [-1, -1]
        }
    }
    console.log([start, end])
    return [start, end]
}

console.log('ans', searchRange(A, B))