/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  if (!root) return 0;
  dfs(root);

  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  }

  return diameter;
};

// misunderstand question, try to find path array
// var diameterOfBinaryTree = function(root) {
//   let path = findPath(root);

//   function findPath(node) {
//     // console.log(node);
//     let leftPath = [];
//     let rightPath = [];
//     rightPath.push(node.val);

//     if (node.left) {
//       leftPath = findPath(node.left);
//     }

//     if (node.right) {
//       rightPath = rightPath.concat(findPath(node.right));
//     }
//     let newPath = leftPath.concat(rightPath);
//     console.log(leftPath, rightPath, newPath);
//     if (newPath.lenth > leftPath.length || newPath.length > rightPath.length) {
//     return newPath;
//     } else if (leftPath.length > rightPath.length) {
//       return leftPath;
//     } else {
//       return rightPath;
//     }
//   }
//   return path;
// };

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
let temp = root.left;
temp.left = new TreeNode(4);
temp.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root));
