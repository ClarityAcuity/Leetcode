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
var maxDepth = function(root) {
    if(root===null){
        return 0;
    }
    let l=root.left;
    let r=root.right;
    let dl = maxDepth(l)+1;
    let dr = maxDepth(r)+1;
    return Math.max(dl,dr);
};
