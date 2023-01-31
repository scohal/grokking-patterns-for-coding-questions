const {ListNode, LinkedList, arrToLinkedList} = require('./linked-list');

/***
(leetcode # 203)

Given the head of a linked list and an integer val,
remove all the nodes of the linked list that has
Node.val == val, and return the new head.
*/

const removeElements = function(head, val) {
  // add a 'sentinel' node to the start
  head = new ListNode(0, head);
  let curr = head;

  // remove all nodes such that curr.val === val
  let next = curr.next;
  while (next !== null) {
      if (next.value === val) {
          next = next.next; // skip over
      } else {
          curr.next = next; // create link
          curr = next;
          next = curr.next;
      }
  }
  curr.next = null;

  return head.next; // remove sentinel node
};

let head = arrToLinkedList([1, 2, 3, 4, 4, 5, 6, 7]).head;
head.log(); // [1] -> [2] -> [3] -> [4] -> [4] -> [5] -> [6] -> [7] -> null
removeElements(head, 4).log(); // [1] -> [2] -> [3] -> [5] -> [6] -> [7] -> null

head = arrToLinkedList([6, 6, 1, 2, 3, 6, 6]).head;
head.log(); // [6] -> [6] -> [1] -> [2] -> [3] -> [6] -> [6] -> null
removeElements(head, 6).log(); // [1] -> [2] -> [3] -> null