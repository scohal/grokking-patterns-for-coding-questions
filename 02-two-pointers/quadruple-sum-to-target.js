/***
Given an array of unsorted numbers and a target number,
find all unique quadruplets in it, whose sum is equal
to the target number.
*/

// Method:
// 1) Sort the array
// 2) Use the same algorithm as triplet sum, with an extra pointer

const quadrupleSumToTarget = (arr, target) => {
  // sort array in non-decreasing order
  arr.sort((a, b) => a - b);

  const result = [];

  for (let w = 0; w < arr.length - 3; w++) {
    for (let x = w + 1; x < arr.length - 2; x++) {
      let y = x + 1;
      let z = arr.length - 1;

      while (y < z) {
        const sum = arr[w] + arr[x] + arr[y] + arr[z];
        if (sum < target) {
          y++;
        } else if (sum > target) {
          z--;
        } else {
          // found a sum equal to target
          result.push([arr[w], arr[x], arr[y], arr[z]]);
          y++;
          while (y < z && arr[y] === arr[y - 1]) y++; // skip dupes
          z--;
          while (y < z && arr[z] === arr[z + 1]) z--; // skip dupes
        }
      }
      while (arr[x + 1] === arr[x]) x++; // skip dupes
    }
    while (arr[w + 1] === arr[w]) w++; // skip dupes
  }
  return result;
}

console.log(quadrupleSumToTarget([-3, -3, 4, 1, 2, -1, 1, -3], 1));
// [-3, -1, 1, 4], [-3, 1, 1, 2]

console.log(quadrupleSumToTarget([2, 0, -1, 1, -2, 2], 2));
// [-2, 0, 2, 2], [-1, 0, 1, 2]