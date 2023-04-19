/**
 * Given two lists of intervals, find the intersection of these two lists.
 * Each list consists of disjoint intervals sorted on their start time.
 */

const intervalsIntersection = (arr1, arr2) => {
  const intersections = [];

  let p1 = 0;

  for (let p2 = 0; p2 < arr2.length; p2++) {
    let [start1, end1] = arr1[p1] || [null, null];
    const [start2, end2] = arr2[p2];

    // Skip over intervals that come before and do not intersect
    while (p1 < arr1.length && start2 > end1) {
      p1++;
      [start1, end1] = arr1[p1] || [null, null];
    }

    // Add all intersecting intervals to the array
    while (p1 < arr1.length && start2 <= end1 && start1 <= end2) {
      intersections.push([Math.max(start1, start2), Math.min(end1, end2)]);
      p1++;
      [start1, end1] = arr1[p1] || [null, null];
    }

    // do this in case the next interval in arr2 intersects with
    // the last interval we checked in arr1
    // ex. list1 = [[5, 10]], list2 = [[1, 7], [8, 13]]
    p1--;
  }

  return intersections;
};

console.log(intervalsIntersection([[1, 3]], [[3, 5]])); // [[3, 3]]

console.log(
  intervalsIntersection(
    [
      [1, 3],
      [5, 6],
      [7, 9],
    ],
    [
      [2, 3],
      [5, 7],
    ]
  )
); // [[2, 3], [5, 6], [7, 7]]

console.log(
  intervalsIntersection(
    [
      [1, 3],
      [5, 7],
      [9, 12],
      [15, 20],
    ],
    [
      [6, 18],
      [19, 20],
    ]
  )
); // [[6, 7], [9, 12], [15, 19], [19, 20]]
