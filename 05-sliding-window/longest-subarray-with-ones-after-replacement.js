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
    let maxLength = 0; // the return value
    let longestSubarray = [];
    let zeroCount = 0; // cannot exceed K
    let start = 0; // start index of sliding window

    for (let end = 0; end < arr.length; end++) {
        if (arr[end] === 0) zeroCount += 1;

        // shrink the window until the number of zeroes is equal to K
        while(zeroCount > K) {
            if (arr[start] === 0) zeroCount -= 1;
            start += 1;
        }

        // update max length
        const length = end - start + 1;
        if (length > maxLength) {
            maxLength = length;
            longestSubarray = arr.slice(start, end + 1);
        }
    }
    console.log(`If you replace no more than ${K}x 0's with 1's...`);
    console.log(`the longest subarray having all 1's will be ${maxLength} elements long. [${longestSubarray}]`);

    return maxLength;
};

console.log(longestSubarrayWithOnesAfterReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)); // 6
console.log(longestSubarrayWithOnesAfterReplacement([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)); // 9
console.log(longestSubarrayWithOnesAfterReplacement([0, 0, 0, 0, 0], 3)); // 3
console.log(longestSubarrayWithOnesAfterReplacement([0, 0, 0, 0, 0], 0)); // 0
console.log(longestSubarrayWithOnesAfterReplacement([1, 1, 1, 1, 1], 3)); // 5