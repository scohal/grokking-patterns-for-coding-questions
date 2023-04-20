/***
We are given an array containing positive and negative numbers.
Suppose the array contains a number ‘M’ at a particular index.
Now, if ‘M’ is positive we will move forward ‘M’ indices and if
‘M’ is negative move backwards ‘M’ indices.

You should assume that the array is circular which means two things:
 - If, while moving forward, we reach the end of the array,
   we will jump to the first element to continue the movement.
 - If, while moving backward, we reach the beginning of the array,
   we will jump to the last element to continue the movement.

Write a method to determine if the array has a cycle.
The cycle should have more than one element and should follow one direction
which means the cycle should not contain both forward and backward movements.

Input: [1, 2, -1, 2, 2]
Output: true
Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0

Input: [2, 2, -1, 2]
Output: true
Explanation: The array has a cycle among indices: 1 -> 3 -> 1

Input: [2, 1, -1, -2]
Output: false
Explanation: The array does not have any cycle.

Solution:
1) Use fast + slow pointer method to find a cycle.
2) Iterate through each element in the array and look for a cycle.
   - If there is a change in direction, it is not a valid cycle.
   - If there is only one element in the cycle, it is not a valid cycle.
3) Continue until a cycle is found, or we have iterated through the whole array.
*/

// const containsCycle = arr => {
//   // iterate through each element
//   for (let i = 0; i < arr.length; i++) {
//     let slow = i;
//     let fast = i;
//     let dir = arr[i] > 0; // store initial direction

//     while (true) {
//       // advance 'fast'
//       fast = advance(fast, arr, dir);
//       // advance 'fast' again
//       if (fast !== -1) fast = advance(fast, arr, dir);
//       // advance 'slow'
//       slow = advance(slow, arr, dir);

//       if (fast === slow || slow === -1 || fast === -1) break;
//     }

//     if (slow === fast && slow !== -1) return true;
//   }
//   return false;
// };

// // Helper function 'advance'
// // Returns -1 if the cycle is invalid.
// const advance = (index, arr, dir) => {
//   if ((arr[index] > 0) !== dir) return -1; // valid cycle cannot change directions

//   // advance index
//   let newIndex = (index + arr[index]) % arr.length;
//   if (newIndex < 0) newIndex += arr.length; // wrap around for negative numbers

//   if (newIndex === index) return -1; // one element cycle, or arr[index] is 0 -> invalid cycle
//   return newIndex;
// };



const containsCycle = (arr) => {
  // check for a cycle at each index in the array
  // - if the "cycle" only has one element, it is not a cycle
  // - if the cycle has a change in direction, it is not a cycle

  for (let i = 0; i < arr.length; i++) {
    let slow = i;
    let fast = i;
    let cycleIsForward = arr[slow] > 0;

    while (true) {
      slow = jumpToIndex(arr, slow);
      fast = jumpToIndex(arr, fast);
      fast = jumpToIndex(arr, fast);
      if (arr[slow] % arr.length === 0 || arr[fast] % arr.length === 0) break; // stuck in a cycle of one element
      if ((arr[slow] > 0) !== cycleIsForward || (arr[fast] > 0) !== cycleIsForward) break; // cycle changes direction
      if (slow === fast) return true; // found a cycle
    }
  }

  return false; // never found a cycle

}

// returns the new index we jump to
const jumpToIndex = (arr, i) => {
  const jumpLength = arr[i];

  let newIndex = (i + jumpLength) % arr.length;
  if (newIndex < 0) newIndex += arr.length;

  return newIndex;
}


console.log(containsCycle([1, 2, -1, 2, 2])); // true (0 -> 1 -> 3 -> 0)
console.log(containsCycle([2, 2, -1, 2])); // true (1 -> 3 -> 1)
console.log(containsCycle([-4, 0, -2, 0, 0, 0])); // true (0 -> 2 -> 0)

console.log(containsCycle([2, 1, -1, 2])); // false
console.log(containsCycle([-4, 0, 0, 0, 0, 0])); // false
console.log(containsCycle([6, 0, 0, 0, 0, 0])); // false