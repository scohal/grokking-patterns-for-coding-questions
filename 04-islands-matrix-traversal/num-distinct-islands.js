/**
 * Two islands are considered the same if and only if
 * they can be translated (not rotated or reflected)
 * to equal each other.
 *
 * Write a function to find the number of distinct
 * islands in the given matrix.
 *
 * Strategy: as we clear an island, create a string
 * that represents the traversal path taken while
 * clearing the island. Save the string in a cache
 * to determine if multiple islands share the same
 * traversal path.
 */


const numDistinctIslands = arr => {
  const cache = {};
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 1) {
        const path = clearIsland(r, c, arr);
        cache[path] = (cache[path] || 0) + 1;
      }
    }
  }
  console.log(cache);
  return Object.keys(cache).length;
};

// Clears the island,
// and returns a string representing the traversal path.
const clearIsland = (r, c, arr, dir = 'O') => {
  if (r < 0 || r >= arr.length || c < 0 || c >= arr[0].length) {
    return ''; // out of bounds
  }
  if (arr[r][c] === 0) {
    return ''; // not a land, or already visited
  }

  // visit cell
  arr[r][c] = 0;

  // dir: 'O' (origin), 'U' (up), 'D' (down), 'L' (left), 'R' (right)
  return dir +
    clearIsland(r - 1, c, arr, 'U') +
    clearIsland(r + 1, c, arr, 'D') +
    clearIsland(r, c - 1, arr, 'L') +
    clearIsland(r, c + 1, arr, 'R');
};

console.log(numDistinctIslands([
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1]
])); // 2

console.log(numDistinctIslands([
  [1, 1, 0, 1],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0]
])); // 2