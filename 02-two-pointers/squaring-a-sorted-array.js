/**
 * Given a sorted array, create a new array containing
 * squares of all the numbers of the input array in the
 * sorted order.
 */

const squaresArray = (arr) => {
  // start at opposite ends of the array
  // whichever element has the greater square, unshift it onto the result array

  let left = 0;
  let right = arr.length - 1;
  let squares = Array(arr.length).fill(null);
  let indexToInsert = arr.length - 1;

  while (left <= right) {
    if (arr[left] * arr[left] > arr[right] * arr[right]) {
      squares[indexToInsert] = arr[left] * arr[left];
      left++;
    } else {
      squares[indexToInsert] = arr[right] * arr[right];
      right--;
    }
    indexToInsert--;
  }
  return squares;
};

console.log(`Squares: ${squaresArray([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${squaresArray([-3, -1, 0, 1, 2])}`);