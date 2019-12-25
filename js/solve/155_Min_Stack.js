/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.data = [];
  this.min = Number.POSITIVE_INFINITY;
  return this;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.data.push(x);
  this.min = this.min > x ? x : this.min;
  console.log(this);
  return this;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.data.pop();
  let data = this.data;
  this.min = Math.min(...data);
  console.log(this);
  return this;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return Number(this.data.slice(-1)[0]);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
let stack = new MinStack();
stack.push(1);
stack.push(2);
let x = stack.top();
let y = stack.getMin();
stack.pop();
let z = stack.getMin();
let a = stack.top();
console.log(x, y, z, a);
