/**
 * Given an array of positive numbers and a positive
 * number ‘k,’ find the maximum sum of any contiguous
 * subarray of size ‘k’.
 * 
 * Input: [2, 1, 5, 1, 3, 2], k=3 
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 */

const maxSumSubarrayOfSizeK = (arr, K) => {
    let maxSum = 0;
    let sum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        sum += arr[windowEnd];

        // slide the window (when we hit the window size)
        if (windowEnd >= K - 1) {
            console.log({sum});
            if (sum > maxSum) maxSum = sum;
            sum -= arr[windowStart]; // subtract element going out of window
            windowStart += 1; // slide window ahead
        }
    }
    return maxSum;
};

console.log(maxSumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3)); // 9 (from [5, 1, 3])
console.log(maxSumSubarrayOfSizeK([2, 3, 4, 1, 5], 2)); // 7 from [3, 4]