const { ListNode, LinkedList, arrToLinkedList } = require("./linked-list");

/***
Given the head of a Singly LinkedList, write a method to modify the LinkedList
such that the nodes from the second half of the LinkedList are inserted
alternately to the nodes from the first half in reverse order. So if the
LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should
return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null

Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
Output: 2 -> 10 -> 4 -> 8 -> 6 -> null

Solution:
1) Find middle node.
2) Reverse second half of linked list.
3) Iterate through first half and second half, updating links
   to produce the required linked list.
*/

// const reverse = (head) => {
//   let prev = null;
//   let next = null;
//   while (head !== null) {
//     next = head.next;
//     head.next = prev;
//     prev = head;
//     head = next;
//   }
//   return prev;
// };

// const rearrange = (ll) => {
//   // find middle node
//   let head = ll.head;
//   let slow = head;
//   let fast = head;
//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   // reverse the second half
//   let head1 = head;           // ex. [1] -> [2] -> [3] -> [4] -> null
//   let head2 = reverse(slow); // ex. [7] -> [6] -> [5] -> [4] -> null

//   // interleave the two halves
//   let next1, next2;
//   while (head1.next !== null && head2.next !== null ) {
//     // update next pointers
//     next1 = head1.next;
//     next2 = head2.next;
//     // update links
//     head1.next = head2;
//     head2.next = next1;
//     // update head pointers
//     head1 = next1;
//     head2 = next2;
//   }

//   // return the rearranged linked list
//   return ll;
// };

const rearrange = (ll) => {
  // 1. Find the middle node
  let slow = ll.head;
  let fast = slow;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // now, `slow` is the middle node

  // 2. Reverse the second half of the list
  let p1 = ll.head;
  let p2 = reverse(slow);

  // p1.log();
  // p2.log();

  // 3. "Zipper merge" the two lists
  while(p1.next !== null && p2.next !== null) {
    const p1next = p1.next;
    const p2next = p2.next;

    p1.next = p2;
    p2.next = p1next;

    p1 = p1next;
    p2 = p2next;
  }  
  return ll;
};

const reverse = (head) => {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }

  return prev;
};

const linkedlists = [
  arrToLinkedList([1, 2, 3, 4, 5, 6, 7]), // [1] -> [7] -> [2] -> [6] -> [3] -> [5] -> [4] -> null
  arrToLinkedList([1, 2, 3, 4, 5, 6]), // [1] -> [6] -> [2] -> [5] -> [3] -> [4] -> null
  arrToLinkedList(["a", "b", "c"]), // [a] -> [c] -> [b] -> null
  arrToLinkedList([1, 2]), // [1] -> [2] -> null
  arrToLinkedList([1]), // [1] -> null
];

linkedlists.forEach(e => rearrange(e).log());

// rearrange(arrToLinkedList([1, 2, 3, 4, 5, 6, 7, 8]));
