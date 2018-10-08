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
var sortList = function(head) {
    //base case : if head is null
    if(!head||!head.next){
        return head;
    }

    let slowptr = head;
    let fastptr = head.next;

    //move fastptr by two and slowptr by one
    //finally slowptr will point to middle node
    while(fastptr!==null&&fastptr.next!==null){
        slowptr = slowptr.next;
        fastptr = fastptr.next.next;
    }

    //get middle of the list
    let righthead = slowptr.next;

    //set the next of middle node to null
    slowptr.next = null;

    //apply mergesort on left list
    let left = sortList(head);

    //apply mergesort on right list
    let right = sortList(righthead);

    //merge the left and right lists
    let sortedlist = sortedmerge1(left, right);
    return sortedlist;
};

var sortedmerge1 = function(left, right){ //O(n+m)
    let result = null;
    //base case
    if(!left)  return right;
    if(!right)  return left;

    //pick either a or b, and recur
    if(left.val<=right.val){
        result = left;
        result.next = sortedmerge1(left.next,right);
    }else{
        result = right;
        result.next = sortedmerge1(left,right.next);
    }
    return result;
};

var sortedmerge2 = function(left, right){
    //a dummy first node to hang the result on
    let dummy = new ListNode(0);

    //tail point to the last result node
    let tail = dummy;
    while(true){
        //if either list runs out, use the other list
        if(!left){
            tail.next=right;
            break;
        }
        if(!right){
            tail.next=left;
            break;
        }

        //compare the data of the two lists which ever lists' data is smaller
        //, append it into tail and advance the head to the next node
        if(left.val<=right.val){
            tail.next = left;
            left = left.next;
        }else{
            tail.next = right;
            right = right.next;
        }

        //advance the tail
        tail = tail.next;
    }
    return dummy.next;
};
