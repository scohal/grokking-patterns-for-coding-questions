/**
 * Given an array of positive numbers and a positive number ‘S,’
 * find the length of the smallest contiguous subarray whose sum
 * is greater than or equal to ‘S’. Return 0 if no such subarray exists.
 *
 * Input: [2, 1, 5, 2, 3, 2], S=7
 * Output: 2
 * Explanation: The smallest subarray with a sum greater than
 * or equal to '7' is [5, 2].
 *
 * Input: [2, 1, 5, 2, 8], S=7
 * Output: 1
 * Explanation: The smallest subarray with a sum greater than
 * or equal to '7' is [8].
 */

const smallestSubarrayGreaterSum = (arr, target) => {
  let minLength = arr.length + 1;
  let sum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // console.log({windowStart, windowEnd});
    sum += arr[windowEnd];

    if (sum >= target) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);

      // shrink the window from the left, check for a valid smaller window
      sum -= arr[windowStart];
      windowStart += 1;
      // freeze windowEnd
      // (these 2 lines will be 'undone' when the for loop increments)
      sum -= arr[windowEnd];
      windowEnd -= 1;
    }
  }

  // return 0 if a valid subarray was never found
  return minLength > arr.length ? 0 : minLength;
};

// console.log(smallestSubarrayGreaterSum([2, 1, 5, 2, 3, 2], 7)); // 2 (from [5, 2])
// console.log(smallestSubarrayGreaterSum([2, 1, 5, 2, 8], 7)); // 1 (from [8])
// console.log(smallestSubarrayGreaterSum([3, 4, 1, 1, 6], 8)); // 3 (from [3, 4, 1])
// console.log(smallestSubarrayGreaterSum([1, 1, 1, 1, 1], 5)); // 5 (from [1, 1, 1, 1, 1])
// console.log(smallestSubarrayGreaterSum([1, 1, 1, 1, 1], 6)); // 0 (not possible)

/**
 * Another solution which uses a nested while loop to shrink the window,
 * instead of 'undoing' the windowEnd increment.
 */

// const smallestSubarrayGreaterSum2 = (arr, target) => {
//     let minLength = arr.length + 1;
//     let sum = 0;
//     let windowStart = 0;

//     for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//         sum += arr[windowEnd];

//         while (sum >= target) {
//             minLength = Math.min(minLength, windowEnd - windowStart + 1);
//             // shrink the window from the left
//             sum -= arr[windowStart];
//             windowStart += 1;
//         }
//     }

//     // return 0 if a valid subarray was never found
//     return minLength > arr.length ? 0 : minLength;
// };

const smallestSubarrayGreaterSum2 = (arr, K) => {
  let windowStart = 0;
  let smallestLength = Number.MAX_VALUE;
  let sum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];

    while (sum >= K) {
      // console.log({windowStart, windowEnd, sum})
      // found a valid subarray, so record its length
      smallestLength = Math.min(smallestLength, windowEnd - windowStart + 1);
      // console.log({smallestLength})
      // try shrinking the window and see if it still passes
      sum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return smallestLength === Number.MAX_VALUE ? 0 : smallestLength;
};

console.log(smallestSubarrayGreaterSum2([2, 1, 5, 2, 3, 2], 7)); // 2 (from [5, 2])
console.log(smallestSubarrayGreaterSum2([2, 1, 5, 2, 8], 7)); // 1 (from [8])
console.log(smallestSubarrayGreaterSum2([3, 4, 1, 1, 6], 8)); // 3 (from [3, 4, 1])
console.log(smallestSubarrayGreaterSum2([1, 1, 1, 1, 1], 5)); // 5 (from [1, 1, 1, 1, 1])
console.log(smallestSubarrayGreaterSum2([1, 1, 1, 1, 1], 6)); // 0 (not possible)
