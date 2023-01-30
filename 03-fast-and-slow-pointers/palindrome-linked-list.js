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
  let next = null;
  while(head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

const isPalindrome = (ll) => {
  // find middle node
  let head = ll.head;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // after the while loop, slow is the middle node

  // reverse the second half
  let headSecondHalf = reverse(slow);

  // additional pointer so we can revert the linked list to the original state
  const copyHeadSecondHalf = headSecondHalf;

  // check if we have a palindrome
  let allValuesMatch = true;
  while(head !== null && headSecondHalf !== null) {
    if (head.value !== headSecondHalf.value) {
      allValuesMatch = false;
      break;
    }
    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }

  reverse(copyHeadSecondHalf); // revert second half

  return allValuesMatch;
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

/*** Reverse and revert a Linked List ***/
let head = new ListNode('a');
head.next = new ListNode('b');
head.next.next = new ListNode('c');
head.next.next.next = new ListNode('d');
head.next.next.next.next = new ListNode('e');
head.log(); // [a] -> [b] -> [c] -> [d] -> [e] -> null
head = reverse(head);
head.log(); // [e] -> [d] -> [c] -> [b] -> [a] -> null
head = reverse(head);
head.log(); // [a] -> [b] -> [c] -> [d] -> [e] -> null

let newHead = reverse(head.next.next);
head.log();    // [a] -> [b] -> [c] -> null
newHead.log(); // [e] -> [d] -> [c] -> null
newHead = reverse(newHead);
console.log(newHead.value); // 'c'
head.log(); // [a] -> [b] -> [c] -> [d] -> [e] -> null

/*** Check if a Linked List is a palindrome ***/
const palindromes = [
  arrToLinkedList([1, 2, 3, 4, 5, 4, 3, 2, 1]),
  arrToLinkedList([1, 2, 3, 4, 4, 3, 2, 1]),
  arrToLinkedList([1, 1]),
  arrToLinkedList([1])
];

const notPalindromes = [
  arrToLinkedList([1, 2, 3, 2]),
  arrToLinkedList([1, 2, 3, 4, 4, 3, 2, 1, 1]),
  arrToLinkedList([1, 0])
]

palindromes.forEach(e => console.log(isPalindrome(e))); // true, true, true, true
notPalindromes.forEach(e => console.log(isPalindrome(e))); // false, false, false