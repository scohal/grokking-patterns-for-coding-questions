/***
 * Given an array of unsorted numbers and a target number,
 * find a triplet in the array whose sum is as close to the
 * target number as possible, return the sum of the triplet,
 * and console log the triplet.
 * If there are more than one such triplet, return the sum
 * of the triplet with the smallest sum.
 */

// Method:
// 1) sort a copy of the input array

// 2) create a variable to store the smallest_distance (between the sum and the target),
//    and a variable to store the corresponding triplet, closest_triplet

// 3) pointers:
    // x --> starts at 0
    // y --> starts at x + 1
    // z --> starts at last index

// 4) iterate x from 0 to (and incl.) the 3rd from last element
    // assign y and z to their places
    // while (y < z)
      // if the sum of arr[x], arr[y], and arr[z] is zero, return 0 and log the triplet

      // if the current distance is better than the smallest_distance,
        // update the smallest_distance
        // upate the closest_triplet

      // if the sum is higher than the target, decrement z
      // if the sum if lower than the target, increment y

// 5) return the sum of closest_triplet and log the closest_triplet

const tripletSumClosetoTarget = (arr, target) => {

  const copy = [...arr].sort();

  let smallestDistance = Infinity;
  let closestTriplet = [Infinity, Infinity, Infinity];
  let closestTripletSum = Infinity;

  for (let x = 0; x < copy.length - 2; x++) {
    let y = x + 1;
    let z = copy.length - 1;

    while(y < z) {
      const sum = copy[x] + copy[y] + copy[z];
      if (sum === target) {
        console.log(`Found a sum that equals target!\nTriplet is ${[copy[x], copy[y], copy[z]]} and sum is ${target}.`);
        return sum;
      }

      const currentDistance = Math.abs(target - sum);
      if (currentDistance < smallestDistance ||
         (currentDistance === smallestDistance && sum < closestTripletSum)) {
        smallestDistance = currentDistance;
        closestTriplet = [copy[x], copy[y], copy[z]];
        closestTripletSum = copy[x] + copy[y] + copy[z];
      }

      if (sum > target) { // need a lower sum
        z--;
      } else { // need a higher sum
        y++;
      }
    }
  }

  const closestSum = closestTriplet.reduce((sum, e) => sum + e, 0)
  console.log(`The closest sum found was ${closestSum}.
    Triplet is ${closestTriplet}`);
  return closestSum;
}


console.log(tripletSumClosetoTarget([-2, 0, 1, 2], 2)); // The closest sum found was 1. Triplet is [-2, 1, 2].
console.log(tripletSumClosetoTarget([-3,  -1, 1, 2], 1)); // The closest sum found was 0. Triplet is [-3, 1, 2].
console.log(tripletSumClosetoTarget([-3,  -1, 1, 2], 2)); // Found a sum that equals target. Triplet is [-1, 1, 2] and sum is 2.
console.log(tripletSumClosetoTarget([-1, -1, 1, 1], 0)); // // The closest sum found was -1. Triplet is [-1, -1, 1].