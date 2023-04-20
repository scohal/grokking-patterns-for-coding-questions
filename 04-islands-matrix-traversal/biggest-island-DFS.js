/**
 * Given a 2D array (i.e., a matrix) containing only 1s (land)
 * and 0s (water), find the biggest island in it. Write a
 * function to return the area of the biggest island.
 */

const biggestIsland_DFS = (arr) => {
  let biggestIslandArea = 0;
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 1) {
        biggestIslandArea = Math.max(visitIsland(arr, r, c), biggestIslandArea);
      }
    }
  }
  return biggestIslandArea;
};

const visitIsland = (arr, r, c) => {
  // is out of bounds or is a water cell
  if (!arr?.[r]?.[c]) return 0;

  // clear space
  arr[r][c] = 0;

  return (
    1 +
    visitIsland(arr, r - 1, c) +
    visitIsland(arr, r + 1, c) +
    visitIsland(arr, r, c - 1) +
    visitIsland(arr, r, c + 1)
  );
};

console.log(
  biggestIsland_DFS([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ])
); // 5

console.log(
  biggestIsland_DFS([
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 10

console.log(
  biggestIsland_DFS([
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
  ])
); // 1
