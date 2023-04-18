/**
 * Given a list of non-overlapping intervals sorted by their start time,
 * insert a given interval at the correct position and merge all necessary
 * intervals to produce a list that has only mutually exclusive intervals.
 */

const insertInterval = (intervals, newInterval) => {
  // the intervals array is already non-overlapping
  // the intervals array is already sorted by start time

  const merged = [];

  // 1. Add intervals to the merged array until we are at the position where
  // we should "insert" the newInterval.
  // SKIP all intervals that end before the new interval.
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    merged.push(intervals[i]);
    i++;
  }

  // 2. Now, we need to handle the newInterval and all intervals that come after
  let [start, end] = newInterval;
  while (i < intervals.length) {
    const [currStart, currEnd] = intervals[i];

    if (currStart <= end) {
      // need to merge
      start = Math.min(start, currStart);
      end = Math.max(end, currEnd);
    } else {
      // add merged interval to resul
      merged.push([start, end]);
      start = currStart;
      end = currEnd;
    }

    i++;
  }

  // 3. Add the last interval to the result
  merged.push([start, end]);

  return merged;
};

console.log(
  insertInterval(
    [
      [1, 3],
      [5, 7],
      [8, 12],
    ],
    [4, 6]
  )
);
// [[1,3], [4,7], [8,12]]

console.log(
  insertInterval(
    [
      [1, 3],
      [5, 7],
      [8, 12],
    ],
    [4, 10]
  )
);
// [[1,3], [4,12]]

console.log(
  insertInterval(
    [
      [2, 3],
      [5, 7],
    ],
    [1, 4]
  )
);
// [[1,4], [5,7]]

console.log(
  insertInterval(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    [1, 3]
  )
);
// [[1,4], [5,6]]
