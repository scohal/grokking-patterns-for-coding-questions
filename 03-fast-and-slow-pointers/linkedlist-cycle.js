const {ListNode, LinkedList, arrToLinkedList} = require('./linked-list');

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

const hasCycle = (ll) => {
  let slow = ll.head;
  let fast = ll.head;
 
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true; // found a cycle
  }  
  return false; // no cycle
}

// Create a non-cycled and cycled linked lists...
const values = [1, 2, 3, 4, 5, 6, 7];

const llSimple = arrToLinkedList(values);
const llSingleSimple = arrToLinkedList(['a']);

const llCycled = arrToLinkedList(values.map(e => e * 2));
llCycled.getLast().next = llCycled.getNode(3);

const llSingleCycle = arrToLinkedList(['a']);
llSingleCycle.head.next = llSingleCycle.head;

// TEST
console.log('Does llSimple have a cycle? ' + hasCycle(llSimple)); // false
console.log('Does llSingleSimple have a cycle? ' + hasCycle(llSingleSimple)); // false

console.log('Does llCycled have a cycle? ' + hasCycle(llCycled)); // true
console.log('Does llSingleCycle have a cycle? ' + hasCycle(llSingleCycle)); // true