/***
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 * Assume the array will have 3 or more number elements.
 */

const tripletSumToZero = (arr) => {
  // sort the array
  arr.sort((a, b) => a - b);

  // 3 pointers: x, y, and z
  // x will iterate from 0 to the 3rd-to-last index in the array (array.length - 3)
  // y and z will be "left" and "right" pointers and follow the twoSum pattern

  const result = [];

  for (let x = 0; x < arr.length - 2; x++) {
    let y = x + 1;
    let z = arr.length - 1;

    // find: arr[x] + arr[y] + arr[z] === 0
    // or: arr[y] + arr[z] === -1 * arr[x]
    const target = arr[x] * -1;

    while (y < z) {
      let sum = arr[y] + arr[z];

      if (sum === target) {
        result.push([arr[x], arr[y], arr[z]]); // found a triplet
        y++;
        while (y < z && arr[y] === arr[y - 1]) y++; // skip duplicates
        z--;
        while (y < z && arr[z] === arr[z + 1]) z--;
      } else if (sum < target) {
        y++; // need a larger pair (y, z)
        while (y < z && arr[y] === arr[y - 1]) y++;
      } else {
        z--; // need a smaller pair (y, z)
        while (y < z && arr[z] === arr[z + 1]) z--;
      }
    }

    // skip duplicates at x pointer
    while (arr[x + 1] === arr[x]) x++;
  }

  return result;
};

console.log(tripletSumToZero([-5, 2, -1, -2, 3])); // [ [-5, 2, 3], [-2, -1, 3] ]
console.log(tripletSumToZero([1, 2, 3])); // [ [1, 2, 3] ]
// deal with duplicates
console.log(
  tripletSumToZero([
    -2, -2, -2, -1, -1, -1, 3, 3, 3, -5, -5, -5, 5, 5, 5, 2, 2, 2, 1, 4,
  ])
);
// [ [-5, 1, 4], [-5, 2, 3], [-2, -2, 4], [-2, -1, 3], [-1, -1, 2] ]

console.log(tripletSumToZero([-3, -3, -3, 0, 0, 0, 3, 3, 3])); // [ [-3, 0, 3] ]

// (NOT CORRECT) if we don't handle duplicates, the above example will return:
// [ [-3, 0, 3], [-3, 0, 3], [-3, 0, 3], [0, 0, 0] ]

// (CORRECT) if we do handle duplicates, the above example will return:
// [ [-3, 0, 3], [0, 0, 0] ]
