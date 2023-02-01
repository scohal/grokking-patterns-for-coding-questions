/**
 * A closed island is an island that is totally surrounded by 0s (i.e., water).
 * This means all horizontally and vertically connected cells of a closed island
 * are water. This also means that, by definition, a closed island can't touch
 * an edge (as then the edge cells are not connected to any water cell).
 *
 * Write a function to find the number of closed islands in the given matrix.
 */


const numClosedIslands = arr => {
  let count = 0;
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 1) {
        count += visitIsland(r, c, arr) === 0 ? 1 : 0;
      }
    }
  }
  return count;
};

// Clears the island.
// Returns the number of cells touching the edge.
// If the return value is 0, that means the island is closed.
const visitIsland = (r, c, arr) => {
  let touchingEdge = 0;
  if (r < 0 || r >= arr.length || c < 0 || c >= arr[0].length) {
    return 0; // out of bounds
  }
  if (arr[r][c] === 0) {
    return 0; // already visited, or it is not an island space
  }

  // clear the island
  arr[r][c] = 0;

  if (r === 0 || r === arr.length - 1 || c === 0 || c === arr[0].length - 1) {
    touchingEdge = 1; // touching the edge of the matrix
  }

  return touchingEdge +
    visitIsland(r - 1, c, arr) +
    visitIsland(r + 1, c, arr) +
    visitIsland(r, c - 1, arr) +
    visitIsland(r, c + 1, arr);
}

/**
 * Another solution, where the visitIsland2 function returns true/false.
 */
const numClosedIslands2 = arr => {
  let count = 0;
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 1) {
        if (visitIsland2(r, c, arr)) count += 1;
      }
    }
  }
  return count;
};

const visitIsland2 = (r, c, arr) => {
  if (r < 0 || r >= arr.length || c < 0 || c >= arr[0].length) {
    return false; // out of bounds -> island must be touching an edge
  }
  if (arr[r][c] === 0) {
    return true; // already visited, or it is not an island space
  }

  arr[r][c] = 0; // clear the island

  let isClosed = true;
  isClosed &= visitIsland2(r - 1, c, arr); // neccessary to write this way
  isClosed &= visitIsland2(r + 1, c, arr); // using 'bitwise AND assignment'
  isClosed &= visitIsland2(r, c - 1, arr); // to prevent short-circuiting
  isClosed &= visitIsland2(r, c + 1, arr);

  return isClosed;
}

console.log(numClosedIslands2([
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
])); // 1

console.log(numClosedIslands2([
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
])); // 2

console.log(numClosedIslands2([
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1],
  [0, 1, 0, 1, 1]
])); // 1

console.log(numClosedIslands2([
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0]
])); // 5