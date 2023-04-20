/**
 * Given an array containing 0s and 1s, if you are allowed
 * to replace no more than ‘k’ 0s with 1s, find the length
 * of the longest contiguous subarray having all 1s.
 *
 * Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
 * Output: 6
 * Explanation: Replace the '0' at index 5 and 8 to have the
 * longest contiguous subarray of 1s having length 6.
 *
 * Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
 * Output: 9
 * Explanation: Replace the '0' at index 6, 9, and 10 to have
 * the longest contiguous subarray of 1s having length 9.
 */

const longestSubarrayWithOnesAfterReplacement = (arr, K) => {
  // as we grow thewindow,
  let numZeroes = 0;
  let maxLength = 0;

  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 0) numZeroes++;

    // if there are too many zeroes, shrink the window
    while (numZeroes > K) {
      if (arr[windowStart] === 0) numZeroes--;
      windowStart++;
    }

    // now, check if the current window is has the longest length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(
  longestSubarrayWithOnesAfterReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)
); // 6
console.log(
  longestSubarrayWithOnesAfterReplacement(
    [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
    3
  )
); // 9
console.log(longestSubarrayWithOnesAfterReplacement([0, 0, 0, 0, 0], 3)); // 3
console.log(longestSubarrayWithOnesAfterReplacement([0, 0, 0, 0, 0], 0)); // 0
console.log(longestSubarrayWithOnesAfterReplacement([1, 1, 1, 1, 1], 3)); // 5
