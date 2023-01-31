const {ListNode, LinkedList, arrToLinkedList} = require('./linked-list');

/**
 * (leetcode #19)
 * Given the head of a linked list, remove the nth node
 * from the end of the list and return its head.
 *
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 * Input: head = [1], n = 1
 * Output: []
 *
 * Input: head = [1,2], n = 1
 * Output: [1]
 */

const removeNthFromEnd = function(head, n) {
  // find the length of the list
  let curr = head;
  let length = 0;
  while (curr !== null) {
      length += 1;
      curr = curr.next;
  }
  if (length === n) return head.next; // remove the first node

  // start at the head of the list, and traverse (length - n - 1) nodes
  curr = head;
  for (let i = 0; i < length - n - 1; i++) {
    curr = curr.next;
  }

  // if the node to remove is the last, create a link to null
  curr.next = curr.next?.next || null;

  return head;
};

let = ll = arrToLinkedList([1, 2, 3, 4, 5]).head;
removeNthFromEnd(ll, 1).log(); // [1] -> [2] -> [3] -> [4] -> null

ll = arrToLinkedList([1, 2, 3, 4, 5]).head;
removeNthFromEnd(ll, 2).log(); // [1] -> [2] -> [3] -> [5] -> null

ll = arrToLinkedList([1, 2, 3, 4, 5]).head;
removeNthFromEnd(ll, 3).log(); // [1] -> [2] -> [4] -> [5] -> null

ll = arrToLinkedList([1, 2, 3, 4, 5]).head;
removeNthFromEnd(ll, 4).log(); // [1] -> [3] -> [4] -> [5] -> null

ll = arrToLinkedList([1, 2, 3, 4, 5]).head;
removeNthFromEnd(ll, 5).log(); // [2] -> [3] -> [4] -> [5] -> null

ll = arrToLinkedList([1]).head;
console.log(removeNthFromEnd(ll, 1)); // null