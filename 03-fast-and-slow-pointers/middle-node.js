const {ListNode, LinkedList, arrToLinkedList} = require('./linked-list');

/***
Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, return the second middle node.

A brute force solution would be to calculate the length of the LL, then to start back at the head
and advance half the length to arrive at the middle node.

Instead, we can use fast + slow pointers. The fast pointer will travel twice as fast as the slow.
Therefore, when the fast pointer reaches the end of the list, the slow pointer will be at the
halfway node.
*/

const middleNode = (ll) => {
  let slow = ll.head;
  let fast = ll.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const llEven = arrToLinkedList([1, 2, 3, 4, 5, 6]);
const llOdd = arrToLinkedList([1, 2, 3, 4, 5, 6, 7]);
console.log(middleNode(llEven).value); // 4
console.log(middleNode(llOdd).value); // 4