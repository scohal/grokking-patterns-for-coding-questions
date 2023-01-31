const {ListNode, LinkedList, arrToLinkedList} = require('./linked-list');

/***
(leetcode #2)

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single
digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number
0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

const addTwoNumbers = function(l1, l2) {
  let result = new ListNode();
  let resultHead = result;
  let carryOver = false;

  // until l1 and l2 are iterated through
  while (true) {
    let sum = (l1 === null ? 0 : l1.value) +
              (l2 === null ? 0 : l2.value) +
              (carryOver ? 1 : 0);

    // carry over a 1 if the sum is greater than 9
    carryOver = false;
    if (sum > 9) {
      sum = sum % 10;
      carryOver = true;
    }

    // add a digit to the result linkedlist
    result.value = sum;

    // advance l1 and l2
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;

    // if l1 and l2 are iterated through and there is no carrOver digit
    if (l1 === null && l2 === null && !carryOver) break;

    // prepare the next node
    result.next = new ListNode();
    result = result.next;
  }
  return resultHead;
};

let l1 = arrToLinkedList([2, 4, 3]).head;
let l2 = arrToLinkedList([5, 6, 4]).head;
addTwoNumbers(l1, l2).log(); // [7] -> [0] -> [8] -> null

l1 = arrToLinkedList([0]).head;
l2 = arrToLinkedList([0]).head;
addTwoNumbers(l1, l2).log(); // [0] -> null

l1 = arrToLinkedList([5]).head;
l2 = arrToLinkedList([5]).head;
addTwoNumbers(l1, l2).log(); // [0] -> [1] -> null

l1 = arrToLinkedList([0]).head;
l2 = arrToLinkedList([7, 3]).head;
addTwoNumbers(l1, l2).log(); // [7] -> [3] -> null