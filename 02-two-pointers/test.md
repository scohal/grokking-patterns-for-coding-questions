# The Two Pointers Pattern 

This will be a part of a series on algorithms, patterns to solve them, and my solutions.

The process of writing this down, as if I am teaching someone else, helps me retain the knowledge. Plus, it's nice to be able to look back at my notes to review or to reflect on what I have learned so far.

## Two Pointers

This pattern is useful in problems involving sorted arrays or linked lists.

The simplest example of this pattern is [LeetCode 1. Two Sum](https://leetcode.com/problems/two-sum/)

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

## Naive approach
Use a nested for loop and iterate through every possible pair.

```js
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]]
      }
    }
  }
  return [-1, -1]
}
```
This method has O(n<sup>2</sup>) time complexity... not great.

## The *two pointers* approach
Use the fact that the array is already sorted to our advantage!
- Create two pointers, `p1` and `p2`. These are indexes in our array.
  - `p1` starts at index 0.
  - `p2` starts at the last index.
- Calculate the sum of `arr[p1]` and `arr[p2]`.
  - If the sum is equal to the target, we are done! Return `[p1, p2]`.
  - If the sum is less than the target, we need a smaller sum, so decrement `p2`.
    - *Explanation:* since the array is sorted, we can decrement the `p2` pointer and be certain that the next sum will be equal to or smaller than the current sum.
  - If the sum is greater than the target, we need a larger sum, so increment `p1`.
    - *Explanation:* Same logic as before - the array is sorted, so incrementing `p1` guaratees us a sum that is equal to or greater than the current sum.
- Repeat the previous step until:
  - The sum is equal to the target sum, or
  - `p1 >= p2`, meaning that our pointers have passed each other, and there are no more pairs to check.

### The solution to this problem (Javascript)

```js
const twoSum = (arr, target) => {
  let p1 = 0
  let p2 = arr.length - 1
  while (p1 < p2) {
    const sum = arr[p1] + arr[p2]
    if (sum === targetSum) return [p1, p2]
    else if (sum < targetSum) p1++
    else p2--
  }
}
```

The two pointers approach has a O(n) time complexity because in the worst case each element of the array will be "touched" once. This is far superior to the O(n<sup>2</sup>) time complexity of the naive solution!

---

# More problems that can be solved with this pattern

[1. Two Sum](https://leetcode.com/problems/two-sum/)

[21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

[844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)

[977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)



