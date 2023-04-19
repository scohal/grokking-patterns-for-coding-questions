/**
 * Given an array of intervals
 * representing ‘N’ appointments,
 * find out if a person can attend all the appointments.
 */

const appointmentsDoNotConflict = (arr) => {
  // sort the intervals by start time
  arr.sort((a, b) => a[0] - b[0]);
  console.log(arr);

  // determine if any intervals overlap
  for (let i = 0; i < arr.length - 1; i++) {
    const intervalA = arr[i];
    const intervalB = arr[i + 1];

    const [startA, endA] = intervalA;
    const [startB, endB] = intervalB;

    if (startB < endA) return false; // there is an overlap
  }
  return true; // no overlaps found
};

console.log(
  appointmentsDoNotConflict([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
); // false

console.log(
  appointmentsDoNotConflict([
    [6, 7],
    [2, 4],
    [8, 12],
  ])
); // true

console.log(
  appointmentsDoNotConflict([
    [4, 5],
    [2, 3],
    [3, 6],
  ])
); // false
