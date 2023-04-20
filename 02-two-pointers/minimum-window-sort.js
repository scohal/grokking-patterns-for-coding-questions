/***
Given an array, find the length of the smallest subarray
in it which when sorted will sort the whole array.

Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9]
to make the whole array sorted

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1]
to make the whole array sorted

Input: [1, 2, 3]
Output: 0
Explanation: The array is already sorted

Input: [3, 2, 1]
Output: 3
Explanation: The whole array needs to be sorted.
*/

const minimumWindowSort = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  // 1) find the first element out of sorting order
  // from the beginning of the array
  while (left < arr.length - 1 && arr[left + 1] >= arr[left]) left++;

  // from the end of the array
  while (right > 0 && arr[right - 1] <= arr[right]) right--;

  // grow the subarray to the left
  // to capture all values greater than min
  let subarray = arr.slice(left, right + 1);
  const min = Math.min(...subarray);
  while (left > 0 && arr[left - 1] > min) left--;

  // grow the subarray to the right
  // to capture all values less than max
  subarray = arr.slice(left, right + 1);
  const max = Math.max(...subarray);
  while (right < arr.length - 1 && arr[right + 1] < max) right++;

  subarray = arr.slice(left, right + 1);
  console.log(
    "The smallest subarray that if sorted will sort the whole arrary is:"
  );
  console.log(subarray);
  console.log(`It has a length of ${subarray.length}`);
  return subarray.length;
};

minimumWindowSort([1, 2, 3, 10, 5, 1, 2, 3]); // 7
minimumWindowSort([1, 2, 5, 3, 7, 10, 9, 12]); // 5
minimumWindowSort([1, 3, 2, 0, -1, 7, 10]); // 5
minimumWindowSort([1, 2, 3]); // 0
minimumWindowSort([3, 2, 1]); // 3
minimumWindowSort([1, 3, 2, 4]); // 2
minimumWindowSort([1, 2, 3, 3, 10, 11, 12, 12, 12, 3, 5, 6]); // 8
