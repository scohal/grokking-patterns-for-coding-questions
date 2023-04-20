// left pointer start at 0
// right pointer start at 1

// left pointer represents the last unique element found
// left + 1 is where we put a new unique element

// increment right pointer until we reach a unique element
// once we hit a unique element
  // swap it with the element at (left + 1)
  // increment left


// once we've reached the end of the array
// the number of unique elements will be equal to (left + 1)

const removeDuplicates = (arr) => {
  if (!arr.length) return 0

  let left = 0
  let right = 1

  // advance right until we find a unique element
  while (right < arr.length) {
    if (arr[right] !== arr[left]) {
      // swap
      [arr[left + 1], arr[right]] = [arr[right], arr[left + 1]];
      left++;
    }
    right++;
  }
  
  return left + 1; // the number of unique elements
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(removeDuplicates([2, 2, 2, 11])); // 2
console.log(removeDuplicates([2])); // 1
console.log(removeDuplicates([])); // 0
console.log(removeDuplicates([2, 2, 2, 2, 2, 6, 6])); // 2