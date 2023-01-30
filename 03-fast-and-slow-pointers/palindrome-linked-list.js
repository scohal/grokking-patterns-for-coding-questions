const {ListNode, LinkedList, arrToLinkedList} = require('./linked-list');

/***
Given the head of a Singly LinkedList, write a method to check if
the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList
should be in the original form once the algorithm is finished. The
algorithm should have O(N) time complexity where ‘N’ is the number
of nodes in the LinkedList.

Example 1:
Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true

Example 2:
Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false

Solution:
1) Find the middle of the linked list. Split the linked list at this point.
2) Reverse the second half the of the linked list.
3) Compare the first half to the second half -> if all values are the same,
   it is palindromic.
*/

/***
Reversing a linked list....

---------------------------------------------- prev = null; next = head.next;
prev     head    next
null     [1] --> [2] --> [3] --> [4] --> null

---------------------------------------------- head.next = prev;
prev     head    next
null <-- [1]     [2] --> [3] --> [4] --> null

---------------------------------------------- prev = head;
         prev
         head    next
null <-- [1]     [2] --> [3] --> [4] --> null

---------------------------------------------- head = next;
                 head
         prev    next
null <-- [1]     [2] --> [3] --> [4] --> null

---------------------------------------------- next = head.next;
         prev    head    next
null <-- [1]     [2] --> [3] --> [4] --> null

---------------------------------------------- head.next = prev;
         prev    head    next
null <-- [1] <-- [2]     [3] --> [4] --> null

             ...and so on...

---------------------------------------------- at the end, reassign head... head = prev;
                                 prev    head
null <-- [1] <-- [2] <-- [3] <-- [4]     null
*/

const reverse = (head) => {
  let prev = null;

  while(head !== null) {
    next = head.next;
    head.next = prev; // update head's link to the next node
    prev = head;
    head = next;
  }
  head = prev;
  return head;
};

const isPalindrome = (ll) => {
  // find middle node
  let slow = ll.head;
  let fast = ll.head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const middlenode = slow;

  // reverse the list

};

/*** Reverse a Linked List ***/
const llEven = arrToLinkedList([1, 2, 3, 4, 5, 6]);
// llEven.log();
const llEvenReverse = new LinkedList(reverse(llEven.head));
// llEvenReverse.log();

const llSingle = arrToLinkedList([1]);
// llSingle.log();
const llSingleReverse = new LinkedList(reverse(llSingle.head));
// llSingleReverse.log();

/*** Check if a Linked List is a palindrome ***/
const palindromes = [
  arrToLinkedList([1, 2, 3, 4, 5, 4, 3, 2, 1]),
  arrToLinkedList([1, 2, 3, 4, 4, 3, 2, 1]),
  arrToLinkedList([1, 1])
];

const notPalindromes = [
  arrToLinkedList([1, 2, 3, 2]),
  arrToLinkedList([1, 2, 3, 4, 4, 3, 2, 1, 1]),
  arrToLinkedList([1])
]

palindromes.forEach(e => console.log(isPalindrome(e))); // true, true, true
// notPalindromes.forEach(e => console.log(isPalindrome(e))); // false, false, ?