/***
 * Given a sorted array, create a new array containing
 * squares of all the numbers of the input array in the sorted order.
 * Do not use the .sort() method inside the array.
 */

// Method:
// Pointer x starts at index 0
// Pointer y starts at the last index
// Compare the absolute values of arr[x] and arr[y]
  // If the absolute value of arr[x] is greater:
    // square arr[x], and unshift it onto the result array
    // increment x
  // If the absolute value of arr[y] is greater:
    // square arr[y], and unshift it onto the result array
    // decrement y
// Continue until x > y


const make_squares = (arr) => {
  let x = 0;
  let y = arr.length - 1;
  const result = [];
  while (x <= y) {
    if (Math.abs(arr[x]) >= Math.abs(arr[y])) {
      result.unshift(arr[x] * arr[x]);
      x += 1;
    } else {
      result.unshift(arr[y] * arr[y]);
      y -= 1;
    }
  }
  return result;
}

console.log(make_squares([-2, -1, 0, 2, 3]));
console.log(make_squares([-3, -1, 0, 1, 2]));
