/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let q=[];
    if(head===null){
        return null;
    }
    while(head!==null){
        q.splice(0,0,head.val);
        head=head.next;
    }
    let r = new ListNode(q[0]);
    let t = r;
    for(let i=1;i<q.length;i++){
        t.next = new ListNode(q[i]);
        t = t.next;
    }
    return r;
};
