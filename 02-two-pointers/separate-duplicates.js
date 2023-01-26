/***
 * Given an array of sorted numbers, remove all duplicate number
 * instances from it in-place, such that each element appears
 * only once. The relative order of the elements should be kept
 * the same and you should not use any extra space so that that
 * the solution have a space complexity of O(1).
 *
 * Move all the unique elements at the beginning of the array
 * and after moving return the length of the subarray that has
 * no duplicate in it.
 */

const separateDuplicates = (arr) => {
  // if the array length is 0, return 0
  // if the array length is 1, return 1
  // 1st pointer (x) starts at index 0, and is where a unique value will be inserted
  // 2nd pointer (y) starts at index 1 and searches for the next unique value

  if (arr.length <= 1) return arr.length;

  let x = 0;
  let y = 1;

  while (y < arr.length) {
    if (arr[y] !== arr[x]) { // unique value found, insert it after index x
      x++;
      const swap = arr[y];
      arr[y] = arr[x];
      arr[x] = swap;
    }
    y++;
  }
  return x + 1;
};

// This function SHOULD mutate the input array.

console.log(separateDuplicates([])); // 0
console.log(separateDuplicates([1])); // 1

const array1 = [2, 3, 3, 3, 6, 9, 9];
console.log(separateDuplicates(array1)); // 4
console.log(array1); // [2, 3, 6, 9, 3, 3, 9]


const array2 = [2, 2, 2, 11];
console.log(separateDuplicates(array2)); // 2
console.log(array2); // [2, 11, 2, 2]

/***
 * Another implementation:
 * This implementation doesn't swap elements, but it overwrites the
 * element at nextNonDuplicate.
 */

const separateDuplicates2 = (arr) => {
  if (arr.length <= 1) return arr.length;
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;

  let i = 0;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
};

console.log(separateDuplicates2([])); // 0
console.log(separateDuplicates2([1])); // 1

const array3 = [2, 3, 3, 3, 6, 9, 9];
console.log(separateDuplicates2(array3)); // 4
console.log(array3); // [2, 3, 6, 9, 6, 9, 9]


const array4 = [2, 2, 2, 11];
console.log(separateDuplicates2(array4)); // 2
console.log(array4); // [2, 11, 2, 11]
