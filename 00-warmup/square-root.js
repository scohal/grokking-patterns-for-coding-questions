/**
 * Given a non-negative integer x, return the square root of x rounded down
 * to the nearest integer. The returned integer should be non-negative as well.
 * 
 * You must not use any built-in exponent function or operator.
 */

// Approach one:
// Start the square root, sqrt, at 0
// Increment sqrt until its square is greater than x, then return that sqrt minus one

const squareRootRoundedDown = (x, sqrt = 0) => {
  if (sqrt * sqrt > x) return sqrt - 1;
  return squareRootRoundedDown(x, sqrt + 1);
};

// Approach two: 
// Binary search algorithm

const squareRootRoundedDown2 = (x) => {
  if (x < 2) return x; // x = 0, sqrt is 0.... x = 1, sqrt is 1

  // we could initilize `right = x`
  // but we can narrow down our search more with `right = Math.floor(x/2)`
  // You can see why this works:
  // If x === 2, the answer is 1. We can start `right` at 1
  // If x === 3, the answer is 1. We can start `right` at 1
  // If x === 4, the answer is 2. We can start `right` at 2
  // If x === 5, the answer is 2. We can start `right` at 2
  // ...
  // If x === 10, the answer is 3. We can start `right` at 5
  // If x === 100, then answer is 10. We can start `right` at 10

  // For x > 2
  // Math.floor(x / 2) will always be greater than or equal to the square root of x rounded down
  // Therefore it makes sense it narrow our binary search
  // by starting `right` at Math.floor(x / 2)


  let left = 0;
  let right = x; 
  let pivot;

  while (left <= right) {
    // calculate the pivot - it is in the middle of the left and right values
    pivot = Math.floor(left + (right - left) / 2);

    console.log({left, pivot, right});

    if (pivot * pivot > x) right = pivot - 1; // need to find a smaller pivot
    else if (pivot * pivot < x) left = pivot + 1; // need to find a larger pivot
    else return pivot; // found a perfect square
  }

  console.log('---')
  console.log({left, pivot, right});
  return right;
}

// console.log(squareRootRoundedDown2(0)); // 0
// console.log(squareRootRoundedDown2(1)); // 1
// console.log(squareRootRoundedDown2(2)); // 1
// console.log(squareRootRoundedDown2(10)); // 3

// console.log(squareRootRoundedDown2(47)); // 6
// console.log(squareRootRoundedDown2(49)); // 7

console.log(squareRootRoundedDown2(105)); // 10


