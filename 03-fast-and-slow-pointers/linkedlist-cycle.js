/***
Given the head of a Singly LinkedList, write a function
to determine if the LinkedList has a cycle in it or not.

LL with cycle:
head
[ 1 ] --> [ 2 ] --> [ 3 ] --> [ 4 ] --> [ 5 ] --> [ 6 ] -|
                      ^                                  |
                      |----------------------------------|

LL without cycle:
head
[ 1 ] --> [ 2 ] --> [ 3 ] --> [ 4 ] --> [ 5 ] --> [ 6 ] --> null
*/

const {ListNode, LinkedList, arrToLinkedList} = require('./linked-list.js');

// Create a non-cycled and cycled linked lists...
const values = [1, 2, 3, 4, 5, 6, 7];
// linked list with no cycle
const llSimple = arrToLinkedList(values);
// linked list with no cycle and a single node
const llSingleSimple = arrToLinkedList(['a']);

// linked list with a cycle
const llCycled = arrToLinkedList(values.map(e => e * 2));
llCycled.getLast().next = llCycled.getNode(3);
// linked list with a single node and a cycle
const llSingleCycle = arrToLinkedList(['a']);
llSingleCycle.head.next = llSingleCycle.head;

// SOLUTION 1
const hasCycle = (ll) => {
  let slow = ll.head;
  let fast = ll.head.next;

  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
    if (fast === null || fast === undefined) return false; // reached end of LinkedList
    if (fast === slow) return true; // fast pointer caught up to slow pointer
  }
  return false;
}

// SOLUTION 2
const hasCycle2 = (ll) => {
  let slow = ll.head;
  let fast = ll.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true; // found the cycle
  }
  return false;
}

console.log('Does llSimple have a cycle? ' + hasCycle2(llSimple));
console.log('Does llSingleSimple have a cycle? ' + hasCycle2(llSingleSimple));
console.log('Does llCycled have a cycle? ' + hasCycle2(llCycled));
console.log('Does llSingleCycle have a cycle? ' + hasCycle2(llSingleCycle));