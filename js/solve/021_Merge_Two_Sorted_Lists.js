/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

 */

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * intution solution, can be optimal
 */
var mergeTwoLists = function(l1, l2) {
  let link1 = l1;
  let link2 = l2;
  if (!link1 && !link2) {
    return null;
  } else if (!link2) {
    return link1;
  } else if (!link1) {
    return link2;
  } else if (l1.val > l2.val) {
    link1 = l2;
    link2 = l1;
  }
  let result = new ListNode(link1.val);
  let temp = result;
  link1 = link1.next;
  while (link1 || link2) {
    if (!link2) {
      temp.next = new ListNode(link1.val);
      link1 = link1.next;
    } else if (!link1) {
      temp.next = new ListNode(link2.val);
      link2 = link2.next;
    } else if (link1.val <= link2.val) {
      temp.next = new ListNode(link1.val);
      link1 = link1.next;
    } else if (link1.val > link2.val) {
      temp.next = new ListNode(link2.val);
      link2 = link2.next;
    }
    temp = temp.next;
  }
  return result;
};

// recursively
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
