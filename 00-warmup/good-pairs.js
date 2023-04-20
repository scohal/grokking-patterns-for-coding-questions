/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 */

// This is O(n^2)
const numGoodPairs = (arr) => {
  let num = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) num++;
    }
  }

  return num;
};

// This is O(n)
const numGoodPairs2 = (arr) => {
  const freqMap = {};
  let numPairs = 0;

  for (const el of arr) {
    freqMap[el] = (freqMap[el] || 0) + 1;

    // Every *new* occurence (>1) can be paired with a previous occurence.
    if (freqMap[el] > 1) {
      numPairs += freqMap[el] - 1;
    }
  }

  return numPairs;
};

let nums1 = [1, 2, 3, 1, 1, 3];
let result1 = numGoodPairs2(nums1);
console.log(`Result 1: ${result1} (Expected: 4)`);

let nums2 = [1, 1, 1, 1];
let result2 = numGoodPairs2(nums2);
console.log(`Result 2: ${result2} (Expected: 6)`);

let nums3 = [1, 2, 3];
let result3 = numGoodPairs2(nums3);
console.log(`Result 3: ${result3} (Expected: 0)`);
