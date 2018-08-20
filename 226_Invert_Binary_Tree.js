/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root===null){
        return null;
    }else{
        let invert = new TreeNode(root.val);
        if(root.left!==null){
            invert.right = invertTree(root.left);
        }
        if(root.right!==null){
            invert.left = invertTree(root.right);
        }
        return invert;
    }
};
