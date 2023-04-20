// Given a list of intervals representing the start and end time of ‘N’ meetings,
// find the minimum number of rooms required to hold all the meetings.

const minimumMeetingRooms = (arr) => {
  // 1. Sort meetings by start time
  arr.sort((a, b) => a[0] - b[0]);

  let numRoomsRequired = 1;

  for (let i = 1; i < arr.length; i++) {
    const intervalA = arr[i - 1];
    let intervalB = arr[i];

    let numOverlaps = 0;
    let currentOverlap = intervalA;
    let j = i;

    // while there is an overlap
    while (j < arr.length && intervalB[0] < currentOverlap[1]) {
      // track the current overlap
      currentOverlap = [
        Math.max(intervalB[0], currentOverlap[0]),
        Math.min(intervalB[1], currentOverlap[1]),
      ];

      // count the overlap
      numOverlaps++;

      // go to the next interval so we can check if it overlaps with the currentOverlap
      j++;
      intervalB = arr[j];
    }

    // 0 overlaps -> 1 room... 2 overlaps -> 3 rooms....
    numRoomsRequired = Math.max(numRoomsRequired, numOverlaps + 1);
  }

  return numRoomsRequired;
};

console.log(
  minimumMeetingRooms([
    [1, 4],
    [3, 4],
    [3, 5],
    [5, 6],
  ]) // 3 because 3x meetings are during 3-4
);

console.log(
  minimumMeetingRooms([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
); // 2

console.log(
  minimumMeetingRooms([
    [
      [6, 7],
      [2, 4],
      [8, 12],
    ],
  ])
); // 1

console.log(
  minimumMeetingRooms([
    [1, 4],
    [2, 3],
    [3, 6],
  ])
); // 2

console.log(
  minimumMeetingRooms([
    [4, 5],
    [2, 3],
    [2, 4],
    [3, 5],
  ])
); // 2 (one room for [2,3] and [3,5], and another room for [2,4] and [4,5])
