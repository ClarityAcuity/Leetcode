/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  let len = s.length;
  for (let i = 0; i < len; i++) {
    const char = s[i];
    if (map[char]) {
      stack.push(char);
    } else {
      let popChar = stack.pop();
      if (char !== map[popChar]) {
        return false;
      }
    }
    console.log(char, stack);
  }
  return stack.length === 0;
};

console.log(isValid("()[[]]"));
