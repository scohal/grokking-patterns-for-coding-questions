/***
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 * Assume the array will have 3 or more number elements.
 */

// Method:
// 1) sort a copy of the input array
// 2) create 3 pointers
//    x starts at 0
//    y starts at x + 1
//    z starts at the last index
// 3) Iterate from x = 0 to x = arr.length - 3
    // while y is less than z
        // if arr[x] + arr[y] + arr[z] is equal to zero
          // push the triplet onto a result array
        // if the sum is less than zero, we need a higher pair
          // increment y, skipping over duplicates
        // if the sum if greater than zero, we need a lower pair
          // decrement z, skipping over duplicates
// 4) return the result array of triplets


const tripletSumToZero = (arr) => {
  const copy = [...arr].sort((a, b) => a - b);
  const result = [];

  for (let x = 0; x <= copy.length - 3; x++) {
    let y = x + 1;
    let z = copy.length - 1;

    while (y < z) {
      console.log({x, y, z});
      const sum = copy[x] + copy[y] + copy[z];
      console.log('sum is ... ', sum)
      if (sum === 0) {
        console.log('sum found ', [copy[x], copy[y], copy[z]]);
        result.push([copy[x], copy[y], copy[z]]);
        z--;
        while (y < z && copy[z] === copy[z + 1]) z--; // skip duplicates
        y++;
        while (y < z && copy[y] === copy[y + 1]) y++; // skip duplicates
      } else if (sum > 0) { // need to find a lower pair
        z--;
        while (y < z && copy[z] === copy[z + 1]) z--; // skip duplicates
      } else { // need to find a higher paid
        y++;
        while (y < z && copy[y] === copy[y + 1]) y++; // skip duplicates
      }
    }

    // skip duplicates (x will increment again before next pass thru loop)
    while (copy[x + 1] === copy [x]) x++;
  }

  return result;
}


console.log(tripletSumToZero([-5, 2, -1, -2, 3])); // [ [-5, 2, 3], [-2, -1, 3] ]
console.log(tripletSumToZero([1, 2, 3])); // [ [1, 2, 3] ]
console.log(tripletSumToZero([-2, -2, -2, -1, -1, -1, 3, 3, 3, -5, -5, -5, 5, 5, 5, 2, 2, 2, 1, 4]));
// [ [-5, 1, 4], [-5, 2, 3], [-2, -2, 4], [-2, -1, 3], [-1, -1, 2] ]