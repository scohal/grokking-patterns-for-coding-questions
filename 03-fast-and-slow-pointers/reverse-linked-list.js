const {ListNode, LinkedList, arrToLinkedList} = require('./linked-list');


// returns the head of the new linked list
const reverseLinkedList = (ll) => {
  let prev = null;
  let curr = ll.head;

  while (curr !== null) {
    const nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }

  return prev;
};


const ll = arrToLinkedList([1, 2, 3, 4, 5, 6]);

const reversed = reverseLinkedList(ll);
reversed.log();
