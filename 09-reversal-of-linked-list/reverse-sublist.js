const {
  ListNode,
  LinkedList,
  arrToLinkedList,
} = require("../03-fast-and-slow-pointers/linked-list");

const reverseSubList = (head, p, q) => {
  // Note: p and q start from 1, not 0
  // p === 1 means that the head node is included in the sublist to reverse

  if (q <= p) return head; // nothing to reverse

  let headCopy = head;

  // store the node before p, p_prev
  let p_prev = head;
  if (p === 1) {
    p_prev = null;
  } else {
    while (p > 2) {
      p_prev = p_prev.next;
      p--;
    }
  }

  // store the node after q, q_next
  let q_next = head;
  while (q > 0 && q_next !== null) {
    q_next = q_next.next;
    q--;
  }

  // reverse the sublist between (but not including) p_prev and q_next
  let prev = null;
  if (p_prev) head = p_prev.next;
  let p_pointer = head;

  while (head !== q_next) {
    const nxt = head.next;
    head.next = prev;
    prev = head;
    head = nxt;
  }

  let q_pointer = prev;

  // q_pointer.log();
  // p_pointer.log();
  // q_next.log();

  // re-connect the list
  if (p_prev) {
    // the sublist doesn't start at the first node
    p_prev.next = q_pointer;
  } else {
    // the sublist starts at the first node, so the new list's head should be q_pointer
    headCopy = q_pointer;
  }
  p_pointer.next = q_next;

  return headCopy;
};

// // TEST: sublist is in the middle
let ll = arrToLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
reverseSubList(ll.head, 4, 6).log(); // [1, 2, 3, 6, 5, 4, 7, 8]

// TEST: sublist is at the start
ll = arrToLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
reverseSubList(ll.head, 1, 3).log(); // [3, 2, 1, 4, 5, 6, 7, 8]

// TEST: sublist is at the end
ll = arrToLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
reverseSubList(ll.head, 6, 8).log(); // [1, 2, 3, 4, 5, 8, 7, 6]

// TEST: the entire list should be reversed:
ll = arrToLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
reverseSubList(ll.head, 1, 8).log(); // [8, 7, 6, 5, 4, 3, 2, 1]
