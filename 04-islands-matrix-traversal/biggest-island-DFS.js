/**
 * Given a 2D array (i.e., a matrix) containing only 1s (land)
 * and 0s (water), find the biggest island in it. Write a
 * function to return the area of the biggest island.
 */

const biggestIsland_DFS = (arr) => {
  let biggest = 0;
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 1) {
        const size = visitIsland(r, c, arr);
        if (size > biggest) biggest = size;
      }

    }
  }
  return biggest;
};

const visitIsland = (r, c, arr) => {
  if (arr[0].length === 6) {
    console.log({r, c, arr})
    return;
  }
  if (r < 0 || r >= arr.length || c < 0 || c >= arr[0].length) {
    return 0; // out of bounds
  }
  if (arr[r][c] === 0) {
    return 0; // not a land space or already visited
  }

  arr[r][c] = 0; // visit this space

  // return the size of the island
  return 1 + // count this space
    visitIsland(r - 1, c, arr) +
    visitIsland(r + 1, c, arr) +
    visitIsland(r, c - 1, arr) +
    visitIsland(r, c + 1, arr);
};

console.log(biggestIsland_DFS([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0]
])); // 5

console.log(biggestIsland_DFS([
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
])); // 10

console.log(biggestIsland_DFS([
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1]
])); // 1