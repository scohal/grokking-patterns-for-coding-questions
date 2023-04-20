const { arrToLinkedList } = require("../03-fast-and-slow-pointers/linked-list");

/**
 * Given the head of a LinkedList and a number ‘k’,
 * reverse every alternating ‘k’ sized sub-list starting from the head.
 *
 * If, in the end, you are left with a sub-list with
 * less than ‘k’ elements, reverse it too.
 */

const reverseAlternatingKElementSublist = (head, K) => {
  let headCopy = head;

  let p_prev; // node that comes before the sublist
  let p_pointer; // the first node in the sublist
  let q_pointer; // the last node in the sublist
  let q_next; // the node that comes right after the sublist

  let reverseList = true;

  while (head !== null) {
    // 0. If we are not reversing the current sublist
    if (!reverseList) {
      let prev = null;
      let i = 0;
      while (i < K && head !== null) {
        prev = head;
        head = head.next;
        i++;
      }
      p_pointer = prev; // <------------
      // Reverse the next list and skip to the next loop iteration
      reverseList = !reverseList;
      continue;
    }

    // 1. Assign p_prev and p_pointer
    if (p_prev === undefined) {
      // on the very first sublist
      p_prev = null;
    } else {
      p_prev = p_pointer; // <------------
    }

    p_pointer = head;

    console.log("--");
    // 2. Reverse the sublist
    let prev = null;
    let i = 0;
    while (i < K && head !== null) {
      const nxt = head.next;
      head.next = prev;
      prev = head;
      head = nxt;

      i++;
    }

    // 3. Assign q_pointer and q_next
    q_pointer = prev;
    q_next = head;

    // 4. Reconnect the sublist
    if (p_prev === null) {
      // this is the first sublist, which is reversed
      // so we need to reassign headCopy
      headCopy = q_pointer;
    } else {
      p_prev.next = q_pointer;
    }
    p_pointer.next = q_next;

    // 5. If we reversed this sublist, don't reverse the next
    reverseList = !reverseList;
  }

  return headCopy;
};

let ll = arrToLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
reverseAlternatingKElementSublist(ll.head, 2).log();
// 2, 1, 3, 4, 6, 5, 7, 8

ll = arrToLinkedList([1, 2, 3, 4, 5, 6, 7]);
reverseAlternatingKElementSublist(ll.head, 2).log();
// 2, 1, 3, 4, 6, 5, 7
