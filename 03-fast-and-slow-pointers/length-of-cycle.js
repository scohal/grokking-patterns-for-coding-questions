/***
Problem: Given the head of a LinkedList with a cycle, find the length of the cycle.

Solution:
- use fast + slow pointer pattern
- once the fast and slow pointer are at the same node...
  - freeze the position slow pointer
  - move the fast pointer by one, and increment a counter
  - repeat until the fast pointer meets back up with the slow pointer
*/

const {ListNode, LinkedList, arrToLinkedList} = require('./linked-list');

// Create linked lists.
const values = [1, 2, 3, 4, 5, 6];
const llSimple = arrToLinkedList(values);
const llCycled = arrToLinkedList(values);
llCycled.getLast().next = llCycled.getNode(2);

const lengthOfCycle = (ll) => {
  let slow = ll.head;
  let fast = ll.head?.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return 'This linked list has no cycle.'
    slow = slow.next;
    fast = fast.next.next;
  }

  let length = 1;
  fast = fast.next;
  while (slow !== fast) {
    fast = fast.next;
    length += 1;
  }
  return length;
};

console.log(lengthOfCycle(llSimple)); // This linked list has no cycle.
console.log(lengthOfCycle(llCycled)); // 4