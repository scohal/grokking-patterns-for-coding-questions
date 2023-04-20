/***
 * Given an array containing 0s, 1s and 2s,
 * sort the array in-place. You should treat
 * numbers of the array as objects, hence, we
 * can’t count 0s, 1s, and 2s to recreate the array.
 *
 * The flag of the Netherlands consists of three
 * colors: red, white and blue; and since our input
 * array also consists of three different numbers
 * that is why it is called Dutch National Flag problem.
 */

// Method:
// 'low' points to first element
// 'high' points to last element
// Iterate from i = 0, up to and including high
//    If i points to a 2, swap elements with high, and decrement high
//    If i points to a 1, increment i and move on
//    If i points to a 0, swap elements with low, and increment low AND i

// At the end of the algorithm, the array should look like:
// [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
//              ^              ^
//             low            high

const dutchNationalFlag = (arr) => {
  // pointers
  let low = 0; // where we need to place the next 0
  let high = arr.length - 1; // where we need to place the next 2
  let i = 0;

  while (i <= high) {
    // console.log({arr})
    if (arr[i] === 0) {
      // swap with `low`
      [arr[low], arr[i]] = [arr[i], arr[low]];
      low++;
      i++;
    } else if (arr[1] === 1) {
      i++;
    } else if (arr[i] === 2) {
      // swap with `hi`
      [arr[high], arr[i]] = [arr[i], arr[high]];
      high--;
      // don't increment i, in case we swapped a 2 with a 2
    }
  }

  return arr;
}

const arr1 = [1, 0, 2, 1, 0];
dutchNationalFlag(arr1);
console.log(arr1); // [0, 0, 1, 1, 2]

const arr2 = [2, 2, 0, 1, 2, 0];
dutchNationalFlag(arr2);
console.log(arr2); // [0, 0, 1, 2, 2, 2]

const arr3= [2, 2, 0, 1, 2, 0, 0, 1, 1, 2, 2, 1, 0, 2, 2];
dutchNationalFlag(arr3);
console.log(arr3); // [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2]