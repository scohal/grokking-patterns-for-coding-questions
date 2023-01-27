/***
 * Given an array with positive numbers and a
 * positive target number, find all of its
 * contiguous subarrays whose product is less
 * than the target number.
 */

// Pointer left starts at 0
// Pointer right starts at left

// 1) Calculate the product of the subarray from x to y, inclusive.
//    If that product is less than K, add that subarray to result array.
//    Then, increment y (EXPAND the window to the right).
//    Repeat until the product is too large.
// 2) MOVE the window. Increment x and reassign y to equal x. Repeat step 1.
// 3) Repeat for the entire array.

// The window should only expand to the right. We don't need to expand
// to the left because we would have already checked the element to the left
// on a previous iteration of the outer for loop.

const subarrayProductLessThanK = (arr, K) => {
  const result = [];

  for (let left = 0; left < arr.length; left++) {
    let right = left;
    let lessThanTarget = true;
    while (lessThanTarget && right < arr.length) {
      const subarray = arr.slice(left, right + 1);
      const product = subarray.reduce((acc, e) => acc * e, 1);
      if (product < K) {
        result.push(subarray);
        right++;
      } else {
        lessThanTarget = false;
      }
    }
  }
  return result;
}

console.log(subarrayProductLessThanK([2, 5, 3, 10], 30));
// output contains [2], [5], [2, 5], [3], [5, 3], [10]

console.log(subarrayProductLessThanK([8, 2, 6, 5], 50));
// output contains [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]


/***
 * Another solution which only creates a slice when adding to the result array.
 */

const subarrayProductLessThanK2 = (arr, K) => {
  const result = [];

  for (let left = 0; left < arr.length; left++) {
    let right = left;
    let product = arr[right];

    while (product < K && right < arr.length) {
      result.push(arr.slice(left, right + 1));
      right += 1;
      product *= arr[right];
    }
  }
  return result;
}

console.log(subarrayProductLessThanK2([2, 5, 3, 10], 30));
// output contains [2], [5], [2, 5], [3], [5, 3], [10]

console.log(subarrayProductLessThanK2([8, 2, 6, 5], 50));
// output contains [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]