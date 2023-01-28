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

/***
Example: input is [1, 3, 2, 0, -1, 7, 10]
         indexes...0  1  2  3   4  5  6

1) From the beginning, find the first element out of order. (index 2)
2) From the end, find the first element out of order. (index 3)
3) Sorting the subarray from index 1 to 4 will NOT sort the whole array:
  [1, -1, 0, 2, 3, 7, 10]
      ^^^^^^^^^^^
4) So, we also need to:
    - Determine the minimum element in the subarray, and extend the subarray to
      include any element that is greater than the minimum
    - Determine the maximum element in the subarray, and extend the subarray to
      include any element than is less than the maxmium
    [1, -1, 0, 2, 3, 7, 10]
     ^^^^^^^^^^^^^^
    - If these 5 elements are sorted, the entire array will be sorted, so the
      function should return 5.
*/

const minimumWindowSort = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (arr[left + 1] >= arr[left] && left < arr.length) {
    left += 1;
  }
  while (arr[right - 1] <= arr[right] && right >= 0) {
    right -= 1;
  }

  if (left >= right) {
    console.log('The array is already sorted.')
    return 0;
  }

  const subArr = arr.slice(left, right + 1);
  const subArrMin = Math.min(...subArr);
  const subArrMax = Math.max(...subArr);

  while (arr[left - 1] > subArrMin && left >= 0) {
    left -= 1;
  }
  while (arr[right + 1] < subArrMax && right < arr.length) {
    right += 1;
  }

  console.log('Sorting ' + arr.slice(left, right + 1) + ' will sort the whole array.')
  return right - left + 1;
}

console.log(minimumWindowSort([1, 2, 5, 3, 7, 10, 9, 12])); // 5
console.log(minimumWindowSort([1, 3, 2, 0, -1, 7, 10])); // 5
console.log(minimumWindowSort([1, 2, 3])); // 0
console.log(minimumWindowSort([3, 2, 1])); // 3
console.log(minimumWindowSort([1, 2, 3, 3, 10, 11, 12, 12, 12, 3, 5, 6])); // 8