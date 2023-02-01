/**
 * Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water),
 * count the number of islands in it.
 *
 * An island is a connected set of 1s (land) and is surrounded by either an
 * edge r 0s (water). Each cell is considered connected to other cells
 * horizontally or vertically (not diagonally).
 */

const countIslands_DFS = (arr) => {
  let count = 0;
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 1) {
        clearIsland(r, c, arr);
        count += 1;
      }
    }
  }
  return count;
};

/**
 * Helper function clearIsland.
 * Uses DFS to overwrite 1's with 0's.
 */
const clearIsland = (r, c, arr) => {
  // if the space is out of bounds or if it is 0
  if (r < 0 || r >= arr.length ||
      c < 0 || c >= arr[0].length ||
      arr[r][c] === 0) {
    return;
  }
  arr[r][c] = 0;
  // clear adjacent spaces
  clearIsland(r - 1, c, arr); // above
  clearIsland(r + 1, c, arr); // below
  clearIsland(r, c - 1, arr); // left
  clearIsland(r, c + 1, arr); // right
};


console.log(countIslands_DFS([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]
])); // 3

console.log(countIslands_DFS([
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
])); // 1