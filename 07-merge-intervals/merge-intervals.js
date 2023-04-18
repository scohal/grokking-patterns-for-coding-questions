/**
 * Given a list of intervals, merge all the overlapping intervals
 * to produce a list that has only mutually exclusive intervals.
 */

const mergeIntervals = (arr) => {
  const result = [];

  // 1. sort the intervals so that the start times are in non-decreasing order
  arr.sort((a, b) => a[0] - b[0]);

  let firstInterval = arr[0];
  let [start, end] = firstInterval;

  for (let i = 1; i < arr.length; i++) {
    let [currStart, currEnd] = arr[i];

    if (currStart <= end && start <= currEnd) {
      // found a merge
      start = Math.min(start, currStart);
      end = Math.max(end, currEnd);
    } else {
      // didn't find a merge, push the merged interval to the result array
      result.push([start, end]);
      start = currStart;
      end = currEnd;
    }
  }

  // push the last interval on the array
  result.push([start, end]);

  return result;
};

console.log(
  mergeIntervals([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
); // [[1,5], [7,9]]

console.log(
  mergeIntervals([
    [6, 7],
    [2, 4],
    [5, 9],
  ])
); // [[2,4], [5,9]]

console.log(
  mergeIntervals([
    [1, 4],
    [2, 6],
    [3, 5],
  ])
); // [[1,6]]

console.log(
  mergeIntervals([
    [1, 3],
    [2, 5],
    [10, 13],
    [12, 15],
  ])
); // [[1,5], [10,15]]

console.log(
  mergeIntervals([
    [1, 3],
    [10, 13],
    [2, 5],
    [12, 15],
  ])
); // [[1,5], [10,15]]

console.log(
  mergeIntervals([
    [1, 5],
    [3, 8],
    [7, 10],
    [8, 100],
    [1000, 1001],
    [90, 101],
  ])
); // [[1,100], [1000, 1001]]
