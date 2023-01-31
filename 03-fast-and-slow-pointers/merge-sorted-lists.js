const {ListNode, LinkedList, arrToLinkedList} = require('./linked-list');

/***
(from leetcode #21)

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by
splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = [0]
Output: [0]
*/

const mergeTwoLists = function(list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let head;
  if (list1.value <= list2.value) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }
  let copyHead = head;

  // until both list1 and list2 reach the end
  while (!(list1 === null && list2 === null)) {
    if (list1 === null) {
      head.next = list2;
      list2 = list2.next;
    } else if (list2 === null) {
      head.next = list1;
      list1 = list1.next;
    } else if (list1.value <= list2.value) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
  }
  return copyHead;
};

/*** Recursive solution ***/
const mergeTwoLists2 = function(list1, list2) {
  if (list1 === null) return list2;
  else if (list2 === null) return list1;
  else if (list1.value <= list2.value) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

mergeTwoLists(arrToLinkedList([1, 2, 4]).head, arrToLinkedList([1, 3, 4]).head).log();
mergeTwoLists2(arrToLinkedList([1, 2, 4]).head, arrToLinkedList([1, 3, 4]).head).log();