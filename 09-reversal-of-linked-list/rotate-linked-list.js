const { arrToLinkedList } = require("../03-fast-and-slow-pointers/linked-list");

/**
 * Given the head of a Singly LinkedList and a number ‘k’,
 * rotate the LinkedList to the right by ‘k’ nodes.
 */

const rotateLinkedList = (head, K) => {
  // if the list has 5 nodes, and K is a multiple of 5
  // this function returns the same list

  // 1. Find the length of the list
  let length = 0;
  let curr = head;
  let lastNode; // to store the last node in the original list
  while (curr !== null) {
    lastNode = curr;
    curr = curr.next;
    length++;
  }

  // 2. Calculate the number of nodes we need to rotate
  K = K % length;
  // return early if there is nothing to rotate
  if (K === 0) return head;

  // 3. Now, we need to get the sublist from (length - K) to the end
  // and insert that sublist at the start

  let prev = null;
  curr = head;
  for (let i = 0; i < length - K; i++) {
    prev = curr;
    curr = curr.next;
  }

  // 4. Connect the new list
  lastNode.next = head;
  prev.next = null;

  return curr;
};

let ll = arrToLinkedList([1, 2, 3, 4, 5, 6]);
rotateLinkedList(ll.head, 3).log();
// 4, 5, 6, 1, 2, 3

ll = arrToLinkedList([1, 2, 3, 4, 5, 6]);
rotateLinkedList(ll.head, 1).log();
// 6, 1, 2, 3, 4, 5

ll = arrToLinkedList([1, 2, 3, 4, 5, 6]);
rotateLinkedList(ll.head, 12).log();
// 1, 2, 3, 4, 5, 6
