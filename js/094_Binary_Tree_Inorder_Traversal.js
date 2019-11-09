/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let r = [];
    let s = [];
    let node = root;
    if(node===null) return r;
    while(node!==undefined || s.length!==0){
        //console.log(r,s,node);
        if(node.left){
            let tnode = new TreeNode(node.val);
            tnode.left=null;
            tnode.right=node.right;
            s.push(tnode);
            node=node.left;
        }else{
            r.push(node.val);
            if(node.right){
                node=node.right;
            }else{
                node=s.pop();
            }
        }
    }
    return r;
};
