/***
 * Given an array of sorted numbers and a target sum,
 * find a pair in the array whose sum is equal to the given target.
 *
 * Write a function to return the indices of the two numbers
 * (i.e. the pair) such that they add up to the given target.
 */

const pairWithTargetSum = (arr, target) => {
  // 1st pointer (x) starts at index 0
  // 2nd pointer (y) starts at last index
  // if the sum is less than target, increment pointer 1
  // if the sum is greater than target, decrement pointer 2
  // continue until pointer 1 collides with pointer 2

  let x = 0;
  let y = arr.length - 1;

  while (x < y) {
    const sum = arr[x] + arr[y];
    if (sum === target) return [x, y];
    if (sum < target) {
      x++;
    }
    else {
      y--;
    }
  }

  return -1;
};

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6)); // [1, 3]

console.log(pairWithTargetSum([2, 5, 9, 11], 11)); // [0, 2]

console.log(pairWithTargetSum([-3, -1, 0, 3, 5], 6)); // -1