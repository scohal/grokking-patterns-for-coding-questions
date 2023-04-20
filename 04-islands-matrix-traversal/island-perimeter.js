/**
 * You are given a 2D matrix containing only 1s (land) and 0s (water).
 *
 * The given matrix has only one island, write a function to find the
 * perimeter of that island.
 */

// const islandPerimeter = arr => {
//   const visited = arr.map(subarray => subarray.map(e => false));
//   for (let r = 0; r < arr.length; r++) {
//     for (let c = 0; c < arr[0].length; c++) {
//       if (arr[r][c] === 1) {
//         return calculatePerimeter2(r, c, arr, visited);
//       }
//     }
//   }
// };

// const calculatePerimeter = (r, c, arr, visited) => {
//   if (r < 0 || r >= arr.length || c < 0 || c >= arr[0].length) {
//     return 0; // out of bounds
//   }
//   if (arr[r][c] === 0 || visited[r][c]) {
//     return 0; // not a land space or already visited
//   }

//   visited[r][c] = true;

//   // for each adjacent land, this land contributes 1 less perimeter
//   let perimeter = 4;
//   if (arr?.[r - 1]?.[c] === 1) perimeter -= 1;
//   if (arr?.[r + 1]?.[c] === 1) perimeter -= 1;
//   if (arr?.[r]?.[c - 1] === 1) perimeter -= 1;
//   if (arr?.[r]?.[c + 1] === 1) perimeter -= 1;

//   return perimeter +
//     calculatePerimeter(r - 1, c, arr, visited) +
//     calculatePerimeter(r + 1, c, arr, visited) +
//     calculatePerimeter(r, c - 1, arr, visited) +
//     calculatePerimeter(r, c + 1, arr, visited);
// };

// /**
//  * Another way to implement the calculatePerimeter function,
//  * counting edges one at a time.
//  */
// const calculatePerimeter2 = (r, c, arr, visited) => {
//   if (r < 0 || r >= arr.length || c < 0 || c >= arr[0].length) {
//     return 1; // a boundary cell initiated this call
//   }
//   if (arr[r][c] === 0) {
//     return 1; // represents an edge between land and water
//   }
//   if (visited[r][c]) {
//     return 0; // don't count an edge between two lands
//   }

//   visited[r][c] = true;

//   let edgeCount = 0;
//   edgeCount += calculatePerimeter2(r - 1, c, arr, visited);
//   edgeCount += calculatePerimeter2(r + 1, c, arr, visited);
//   edgeCount += calculatePerimeter2(r, c - 1, arr, visited);
//   edgeCount += calculatePerimeter2(r, c + 1, arr, visited);

//   return edgeCount;
// };

const islandPerimeter = (arr) => {
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 1) return calcPerimeter(arr, r, c);
    }
  }
};

const calcPerimeter = (arr, r, c, cameFrom) => {
  // If we travelled from a land space to:
  // - a water cell
  // - and out-of-bounds cell
  // That means we travelled over an "edge". So, we can count edges in this way.

  if (arr?.[r]?.[c] === undefined) return 1; // went out of bounds
  if (arr[r][c] === 0) return 1; // went into water cell

  arr[r][c] = 0;

  // However, we must not go back to the cell we just came from
  // because then we would mistakenly count it as an edge
  return (
    (cameFrom === 'above' ? 0 : calcPerimeter(arr, r - 1, c, 'below')) +
    (cameFrom === 'below' ? 0 : calcPerimeter(arr, r + 1, c, 'above')) +
    (cameFrom === 'right' ? 0 : calcPerimeter(arr, r, c - 1, 'left')) +
    (cameFrom === 'left'  ? 0 : calcPerimeter(arr, r, c + 1, 'right'))
  );
};

console.log(
  islandPerimeter([
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 4

console.log(
  islandPerimeter([
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 6

console.log(
  islandPerimeter([
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 8

console.log(
  islandPerimeter([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 14

console.log(
  islandPerimeter([
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
  ])
); // 12
