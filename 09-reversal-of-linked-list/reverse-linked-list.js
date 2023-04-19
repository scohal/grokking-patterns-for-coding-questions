const {
  ListNode,
  LinkedList,
  arrToLinkedList,
} = require("../03-fast-and-slow-pointers/linked-list");

const reverseLinkedList = (head) => {
  let prev = null;
  while (head !== null) {
    const nxt = head.next;
    head.next = prev;
    prev = head;
    head = nxt;
  }
  return prev;
};

reverseLinkedList(arrToLinkedList([1]).head).log();

const ll = arrToLinkedList([1, 2, 3]);
ll.log();

reverseLinkedList(ll.head).log();
