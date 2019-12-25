/**
 * @param {number} n
 * @return {string[]}
 * // Backtracking
 */
// var generateParenthesis = function(n) {
//   let result = [];
//   function backtrack(s = "", left = 0, right = 0) {
//     if (s.length === 2 * n) {
//       result.push(s);
//       return;
//     }
//     if (left < n) {
//       backtrack(s + "(", left + 1, right);
//     }
//     if (left > right) {
//       backtrack(s + ")", left, right + 1);
//     }
//   }
//   backtrack();
//   return result;
// };

// class Solution(object):
//     def generateParenthesis(self, N):
//         if N == 0: return ['']
//         ans = []
//         for c in xrange(N):
//             for left in self.generateParenthesis(c):
//                 for right in self.generateParenthesis(N-1-c):
//                     ans.append('({}){}'.format(left, right))
//         return ans

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) return [""];
  result = [];
  for (let i = 0; i < n; i++) {
    const lefts = generateParenthesis(i);
    const rights = generateParenthesis(n - 1 - i);
    lefts.forEach(left => {
      rights.forEach(right => {
        console.log("lefts" + i, lefts);
        console.log("rights" + i, rights);
        result.push("(" + left + ")" + right);
        // console.log(i, left, right, result);
      });
    });
  }
  return result;
};

console.log("ans", generateParenthesis(3));

// Intuition
// generateAll string
// take valid only

// var isValid = function(s) {
//   let stack = [];
//   let map = {
//     "(": ")"
//   };
//   let len = s.length;
//   for (let i = 0; i < len; i++) {
//     const char = s[i];
//     if (map[char]) {
//       stack.push(char);
//     } else {
//       let popChar = stack.pop();
//       if (char !== map[popChar]) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };
