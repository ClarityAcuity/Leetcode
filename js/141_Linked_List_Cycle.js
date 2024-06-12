/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {};

let list = new ListNode(3);
list.next = new ListNode(2);
let second = list.next;
let temp = list.next;
temp.next = new ListNode(0);
temp = temp.next;
temp.next = new ListNode(-4);
temp = list.next;
temp.next = second;

console.log(hasCycle(list));
