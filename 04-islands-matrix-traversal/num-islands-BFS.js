/**
 * Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water),
 * count the number of islands in it.
 *
 * An island is a connected set of 1s (land) and is surrounded by either an
 * edge r 0s (water). Each cell is considered connected to other cells
 * horizontally or vertically (not diagonally).
 */

const countIslands_BFS = (arr) => {
  let count = 0;
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 1) {
        clearIsland_BFS(r, c, arr);
        count += 1;
      }
    }
  }
  return count;
};

const clearIsland_BFS = (r, c, arr) => {
  // create a queue containing spaces that should be cleared
  const spacesToClear = [[r, c]];

  // until the queue is fully cleared
  while (spacesToClear.length > 0) {
    const [row, col] = spacesToClear.shift(); // dequeue element

    if (row < 0 || row >= arr.length || col < 0 || col >= arr[0].length) {
      continue; // out of bounds
    }
    if (arr[row][col] === 0) {
      continue; // already a 0
    }

    arr[row][col] = 0; // clear space

    // enqueue neighbors
    spacesToClear.push([row - 1, col]);
    spacesToClear.push([row + 1, col]);
    spacesToClear.push([row, col - 1]);
    spacesToClear.push([row, col + 1]);
  }
};

console.log(countIslands_BFS([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]
])); // 3

console.log(countIslands_BFS([
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
])); // 1