/***
 * Given an array with positive numbers and a
 * positive target number, find all of its
 * contiguous subarrays whose product is less
 * than the target number.
 */


const subarrayProductLessThanK = (arr, K) => {
  const results = [];
 
  for (let left = 0; left < arr.length; left++) {
    let right = left;

    while (right < arr.length) {
      const subArray = arr.slice(left, right + 1);
      const subArrayProduct = subArray.reduce((product, e) => (product * e), 1);
      if (subArrayProduct < K) {
        results.push(subArray);
        right++
      } else {
        break; // since the array has only positive numbers, we cannot find a smaller product by incrementing right
      }
    }
  }
  
  return results;
}

console.log(subarrayProductLessThanK([2, 5, 3, 10], 30));
// output contains [2], [5], [2, 5], [3], [5, 3], [10]

console.log(subarrayProductLessThanK([8, 2, 6, 5], 50));
// output contains [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]


/***
 * Another solution which only creates a slice when adding to the result array.
 */

// const subarrayProductLessThanK2 = (arr, K) => {
//   const result = [];

//   for (let left = 0; left < arr.length; left++) {
//     let right = left;
//     let product = arr[right];

//     while (product < K && right < arr.length) {
//       result.push(arr.slice(left, right + 1));
//       right += 1;
//       product *= arr[right];
//     }
//   }
//   return result;
// }

// console.log(subarrayProductLessThanK2([2, 5, 3, 10], 30));
// // output contains [2], [5], [2, 5], [3], [5, 3], [10]

// console.log(subarrayProductLessThanK2([8, 2, 6, 5], 50));
// // output contains [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]