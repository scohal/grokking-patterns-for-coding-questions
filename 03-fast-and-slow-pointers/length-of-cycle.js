const { ListNode, LinkedList, arrToLinkedList } = require("./linked-list");

/***
Problem: Given the head of a LinkedList with a cycle, find the length of the cycle.

Solution:
- use fast + slow pointer pattern
- once the fast and slow pointer are at the same node...
  - freeze the position slow pointer
  - move the fast pointer by one, and increment a counter
  - repeat until the fast pointer meets back up with the slow pointer
*/

// const lengthOfCycle = (ll) => {
//   let slow = ll.head;
//   let fast = ll.head?.next;

//   while (slow !== fast) {
//     if (!fast || !fast.next) return 'This linked list has no cycle.'
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   let length = 1;
//   fast = fast.next;
//   while (slow !== fast) {
//     fast = fast.next;
//     length += 1;
//   }
//   return length;
// };

const lengthOfCycle = (ll) => {
  let slow = ll.head;
  let fast = ll.head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) break;
  }
  if (fast === null || fast.next === null) return undefined; // has no cycle;

  // now, slow and fast point to the same place
  // increment fast until it re-meets slow, count each step taken

  let length = 0;
  do {
    fast = fast.next;
    length += 1;
  } while (fast !== slow);

  return length;
};

module.exports = {
  lengthOfCycle,
};

// Create linked lists.
const values = [1, 2, 3, 4, 5, 6];
const llSimple = arrToLinkedList(values);
const llCycled = arrToLinkedList(values);

llCycled.getLast().next = llCycled.getNode(2);
// llCycled.getLast().next = llCycled.getLast();

console.log(lengthOfCycle(llSimple)); // This linked list has no cycle.
console.log(lengthOfCycle(llCycled)); // 4
// console.log(lengthOfCycle(llCycled)); // 1
