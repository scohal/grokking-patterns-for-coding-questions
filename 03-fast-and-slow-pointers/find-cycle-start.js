const {ListNode, LinkedList, arrToLinkedList} = require('./linked-list');
const {lengthOfCycle} = require('./length-of-cycle');

/***
Given the head of a Singly LinkedList that contains a cycle,
write a function to find the starting node of the cycle.

head             cycle start
[ 1 ] --> [ 2 ] --> [ 3 ] --> [ 4 ] --> [ 5 ] --> [ 6 ] -|
                      ^                                  |
                      |----------------------------------|

Solution:
- First, find the length of the cycle, call it K.
- Create two pointers, p1 and p2. Both start at the head.
- Move p2 ahead by K places.
- Increment p1 and p2 by one until they are on the same node.
    - This is the cycle start node.
*/

const cycleStart = (ll) => {
  const K = lengthOfCycle(ll);
  if (typeof K === 'string') return K; // no cycle present
  let p1 = ll.head;
  let p2 = ll.head;
  for (let i = 0; i < K; i++) p2 = p2.next;

  while(p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}

// Create linked lists.
const values = [1, 2, 3, 4, 5, 6];
const llSimple = arrToLinkedList(values);
const llCycled = arrToLinkedList(values);
llCycled.getLast().next = llCycled.getNode(2);

// console.log(cycleStart(llSimple)); // This linked list has no cycle.
console.log(cycleStart(llCycled).value); // 3