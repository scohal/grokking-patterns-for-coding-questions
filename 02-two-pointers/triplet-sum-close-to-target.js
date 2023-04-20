/***
 * Given an array of unsorted numbers and a target number,
 * find a triplet in the array whose sum is as close to the
 * target number as possible, return the sum of the triplet,
 * and console log the triplet.
 * If there are more than one such triplet, return the sum
 * of the triplet with the smallest sum.
 */

const tripletSumClosetoTarget = (arr, target) => {
  // sort the array in non-decreasing order
  arr.sort((a, b) => a - b);

  // track the closest triplet and closest distance
  let closestTripletSum = Number.MAX_VALUE;
  let closestDistance = Number.MAX_VALUE;

  // use the 3 pointer method to find a triplet
  for (let x = 0; x < arr.length - 2; x++) {
    let y = x + 1;
    let z = arr.length - 1;

    while (y < z) {
      const sum = arr[x] + arr[y] + arr[z];
      const distance = Math.abs(sum - target);
  
      if (distance < closestDistance) {
        closestTripletSum = sum;
        closestDistance = distance;
      }
      // in a tie for closest distance, triplet with smaller sum wins
      if (distance === closestDistance && sum < closestTripletSum) {
        closestTripletSum = sum;
      }
  
      if (sum < target) y++;
      else z--;
    }
    
  }

  return closestTripletSum;
};

console.log(tripletSumClosetoTarget([-2, 0, 1, 2], 2)); // The closest sum found was 1. Triplet is [-2, 1, 2].
console.log(tripletSumClosetoTarget([-3, -1, 1, 2], 1)); // The closest sum found was 0. Triplet is [-3, 1, 2].
console.log(tripletSumClosetoTarget([-3, -1, 1, 2], 2)); // Found a sum that equals target. Triplet is [-1, 1, 2] and sum is 2.
console.log(tripletSumClosetoTarget([-1, -1, 1, 1], 0)); // // The closest sum found was -1. Triplet is [-1, -1, 1].

// edge case: two triplets with equal distance
console.log(tripletSumClosetoTarget([0, 0, 1, 1, 2, 6], 5))

// There are two triplets with distance '1' from target: [1, 1, 2] & [0,0, 6].
// Between these two triplets, the correct answer will be [1, 1, 2] as it has
// a sum '4' which is less than the sum of the other triplet which is '6'.
