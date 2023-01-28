/***
Given an array of unsorted numbers and a target number,
find all unique quadruplets in it, whose sum is equal
to the target number.
*/

// Method:
// 1) Sort the array
// 2) Use the same algorithm as triplet sum, with an extra pointer

const quadrupleSumToTarget = (arr, target) => {
  arr.sort((a, b) => a - b);
  const result = [];
  // pointers a, b, c, d
  for (let a = 0; a < arr.length - 3; a++) {
    for (let b = a + 1; b < arr.length - 2; b++) {
      let c = b + 1;
      let d = arr.length - 1;

      while(c < d) {
        const sum = arr[a] + arr[b] + arr[c] + arr[d];
        if (sum === target) {
          result.push([arr[a], arr[b], arr[c], arr[d]]);
          c++;
          while (c < d && arr[c] === arr[c - 1]) c++; // skip duplicates
          d--;
          while (c < d && arr[d] === arr[d + 1]) d--; // skip duplicates
        }
        if (sum < target) { // need a higher pair
          c++;
          while (c < d && arr[c] === arr[c - 1]) c++; // skip duplicates
        }
        if (sum > target) { // need a lower pair
          d--;
          while (c < d && arr[d] === arr[d + 1]) d--; // skip duplicates
        }
      }
    }
  }
  return result;
}

console.log(quadrupleSumToTarget([4, 1, 2, -1, 1, -3], 1));
// [-3, -1, 1, 4], [-3, 1, 1, 2]

console.log(quadrupleSumToTarget([2, 0, -1, 1, -2, 2], 2));
// [-2, 0, 2, 2], [-1, 0, 1, 2]