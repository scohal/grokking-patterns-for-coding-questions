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


/**
 * SINGLE-PASS SOLUTION: don't need to calculate find the length!
 *
 * 1) add dummy/sentinel node to front
 * 2) create a pointer, p2, and advance it n spaces from head
 * 3) create a pointer, p1, and put it one space behind head
 * 4) advance p1 and p2 reaches the end of the list
 * 5) remove p1.next from the list
 */

const removeNthFromEnd2 = function(head, n) {
  let p1 = new ListNode(0, head);
  let p2 = head;

  for (let i = 0; i < n; i++) p2 = p2.next;
  while (p2 != null) {
    p2 = p2.next;
    p1 = p1.next;
  }
  if (p1.next === head) return head.next; // the node to remove is the first node

  p1.next = p1.next?.next || null; // remove the node
  return head;
};

ll = arrToLinkedList([1, 2, 3, 4, 5]).head;
removeNthFromEnd2(ll, 1).log(); // [1] -> [2] -> [3] -> [4] -> null

ll = arrToLinkedList([1, 2, 3, 4, 5]).head;
removeNthFromEnd2(ll, 2).log(); // [1] -> [2] -> [3] -> [5] -> null

ll = arrToLinkedList([1, 2, 3, 4, 5]).head;
removeNthFromEnd2(ll, 3).log(); // [1] -> [2] -> [4] -> [5] -> null

ll = arrToLinkedList([1, 2, 3, 4, 5]).head;
removeNthFromEnd2(ll, 4).log(); // [1] -> [3] -> [4] -> [5] -> null

ll = arrToLinkedList([1, 2, 3, 4, 5]).head;
removeNthFromEnd2(ll, 5).log(); // [2] -> [3] -> [4] -> [5] -> null

ll = arrToLinkedList([1]).head;
console.log(removeNthFromEnd2(ll, 1)); // null