/**
 * Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water),
 * count the number of islands in it.
 *
 * An island is a connected set of 1s (land) and is surrounded by either an
 * edge r 0s (water). Each cell is considered connected to other cells
 * horizontally or vertically (not diagonally).
 */

const countIslands = (arr) => {
  let numIslands = 0;

  // use a nested for loop to iterate through the array
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      // if we find a 1 (land):
      // - increment the count of islands
      // - call a function to recursively clear the island (replace 1's with 0's)
      //   so that we don't double-count the island
      if (arr[r][c] === 1) {
        console.log('found an island at ', {r, c})
        numIslands++;
        clearIsland(arr, r, c);
      }
    }
  }
  return numIslands;
};

// DFS clear island
const clearIsland = (arr, r, c) => {
  // check if out of bounds (undefined) or not on a land space (0)
  if (!arr?.[r]?.[c]) return;

  // clear the space
  arr[r][c] = 0;

  clearIsland(arr, r - 1, c); // up
  clearIsland(arr, r + 1, c); // down
  clearIsland(arr, r, c - 1); // left
  clearIsland(arr, r, c + 1); // right
}

// BFS clear island
const clearIslandBFS = (arr, r, c) => {
  const queue = [[r, c]];

  while (queue.length) {
    // clear the space
    const [r, c] = queue.shift();
    arr[r][c] = 0;

    // add adjacent spaces to queue
    if (arr?.[r - 1]?.[c]) queue.push([r - 1, c]);
    if (arr?.[r + 1]?.[c]) queue.push([r + 1, c]);
    if (arr?.[r]?.[c - 1]) queue.push([r, c - 1]);
    if (arr?.[r]?.[c + 1]) queue.push([r, c + 1]);
  }
}

console.log(countIslands([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]
])); // 3

console.log(countIslands([
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
])); // 1