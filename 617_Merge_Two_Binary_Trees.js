/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    let t = new TreeNode();
    if(t1||t2){
        if (!t1){
            //t1=new TreeNode(0);
            return t2;
        }
        if(!t2){
            //t2=new TreeNode(0);
            return t1;
        }
        //console.log('t1',t1.val);
        //console.log('t2',t2.val);
        t.val = t1.val + t2.val;
        t.left = mergeTrees(t1.left,t2.left);
        t.right = mergeTrees(t1.right,t2.right);
    }else{
        t = null;
    }
    //console.log(t)
    return t;
};
