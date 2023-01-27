/***
 * Given an array arr of unsorted numbers and a target sum,
 * count all triplets in it such that arr[i] + arr[j] + arr[k] < target
 * where i, j, and k are three different indices.
 *
 * Write a function to return an array of all such triplets.
 */

const tripletsWithSmallerSum = (arr, target) => {
  const result = [];
  // create a copy of the array and sort it
  const copy = [...arr].sort();

  // iterate using 3-pointer pattern
  for (let x = 0; x < copy.length - 2; x++) {
    let y = x + 1;
    let z = copy.length - 1;

    while (y < z) {
      const sum = copy[x] + copy[y] + copy[z];

      if (sum >= target) { // need a lower sum
        z--;
      } else { // add ALL triplets copy[x], copy[y], copy[z ... y+1] to result
        while (y < z) {
          result.push([copy[x], copy[y], copy[z]]);
          z--;
        }
        // reset Z amd increment y
        z = copy.length - 1;
        y++;
      }

    }
  }
  return result;
}

console.log(tripletsWithSmallerSum([-1, 0, 2, 3], 3)); // [ [ -1, 0, 3 ], [ -1, 0, 2 ] ]
console.log(tripletsWithSmallerSum([-1, 4, 2, 1, 3], 5)); // [ [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3] ]