/**
 * Given a 2D array (i.e., a matrix) containing only 1s (land)
 * and 0s (water), find the biggest island in it. Write a
 * function to return the area of the biggest island.
 */

const biggestIsland_BFS = (arr) => {
  let biggest = 0;
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr.length; c++) {
      if (arr[r][c] === 1) {
        const size = visitIsland(r, c, arr);
        if (size > biggest) biggest = size;
      }
    }
  }
  return biggest;
};

const visitIsland = (r, c, arr) => {
  let size = 0;
  const spacesToVisit = [[r, c]];

  while (spacesToVisit.length > 0) {
    const [row, col] = spacesToVisit.shift();

    if (row < 0 || row >= arr.length || col < 0 || col >= arr[0].length) {
      continue;
    }
    if (arr[row][col] === 0) {
      continue;
    }

    arr[row][col] = 0; // visit space
    size += 1; // increment size

    spacesToVisit.push([row - 1, col]);
    spacesToVisit.push([row + 1, col]);
    spacesToVisit.push([row, col - 1]);
    spacesToVisit.push([row, col + 1]);
  }
  return size;
};

console.log(biggestIsland_BFS([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0]
])); // 5

console.log(biggestIsland_BFS([
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
])); // 10

console.log(biggestIsland_BFS([
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1]
])); // 1