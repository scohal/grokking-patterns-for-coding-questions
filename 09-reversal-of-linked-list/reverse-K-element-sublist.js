const {
  ListNode,
  LinkedList,
  arrToLinkedList,
} = require("../03-fast-and-slow-pointers/linked-list");

/**
 * Given the head of a LinkedList and a number ‘k’, reverse every ‘k’
 * sized sub-list starting from the head.
 *
 * If, in the end, you are left with a sub-list with less than
 * ‘k’ elements, reverse it too.
 */

const reverseEveryKElementSublist = (head, K) => {
  let headCopy = head;

  let p_prev, p_pointer, q_pointer, q_next;

  // until we reach the end of the list
  while (head !== null) {
    // 1. ASSIGN P_POINTER & P_PREV
    if (p_prev === undefined) {
      // at the first sublist
      p_prev = null;
    } else {
      // in the middle of the list somewhere
      p_prev = p_pointer;
    }
    p_pointer = head;

    // 2. REVERSE THE SUBLIST
    let prev = null;
    let i = 0;
    while (i < K && head !== null) {
      const nxt = head.next;
      head.next = prev;
      prev = head;
      head = nxt;
      i++;
    }
    // 3. ASSIGN Q_POINTER AND Q_NEXT
    q_pointer = prev;
    q_next = head;

    // 4. RECONNECT POINTERS
    if (p_prev === null) {
      // at the very first sublist
      // so we need to reassign headCopy
      headCopy = q_pointer;
    } else {
      // in the middle of the list
      // so we need to connect to previous sublist
      p_prev.next = q_pointer;
    }
    p_pointer.next = q_next;
  }

  return headCopy;
};

let ll = arrToLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
reverseEveryKElementSublist(ll.head, 3).log();
// 3, 2, 1, 6, 5, 4, 8, 7

ll = arrToLinkedList([1, 2, 3, 4, 5]);
reverseEveryKElementSublist(ll.head, 1).log();
// 1, 2, 3, 4, 5

ll = arrToLinkedList([1, 2, 3, 4, 5, 6]);
reverseEveryKElementSublist(ll.head, 3).log();
// 3, 2, 1, 6, 5, 4

ll = arrToLinkedList([1, 2, 3, 4, 5, 6]);
reverseEveryKElementSublist(ll.head, 8).log();
// 6, 5, 4, 3, 2, 1
