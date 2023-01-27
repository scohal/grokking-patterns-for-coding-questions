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
  // create low and high pointers
  let low = 0;                // put 0's before low
  let high = arr.length - 1;  // put 2's after high

  // create an 'i' pointer that will iterate between low and high
  let i = 0;

  // iterate i from 0, up to and including high
  while (i <= high) {
    if (arr[i] === 0) {
      [arr[low], arr[i]] = [arr[i], arr[low]]; // swap
      low++;
      i++;
    } else if (arr[i] === 2) {
      [arr[high], arr[i]] = [arr[i], arr[high]]; // swap
      high--;
    } else { // arr[i] is 1
      i++;
    }
  }

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