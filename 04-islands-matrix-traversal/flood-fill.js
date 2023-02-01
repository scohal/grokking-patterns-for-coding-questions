/**
 * Any image can be represented by a 2D integer array (i.e., a matrix)
 * where each cell represents the pixel value of the image.
 *
 * Flood fill algorithm takes a starting cell (i.e., a pixel) and a color.
 * The given color is applied to all horizontally and vertically connected
 * cells with the same color as that of the starting cell. Recursively,
 * the algorithm fills cells with the new color until it encounters a cell
 * with a different color than the starting cell.
 *
 * Given a matrix, a starting cell, and a color, flood fill the matrix.
 */

const floodFill = (arr, cell, newColor, originalColor) => {
  const [row, col] = cell;
  if (row < 0 || row >= arr.length || col < 0 || col >= arr[0].length) {
    return; // out of bounds
  }
  if (originalColor === undefined) originalColor = arr[row][col];
  if (arr[row][col] !== originalColor) {
    return; // space is not the original color
  }

  arr[row][col] = newColor; // fill the space

  floodFill(arr, [row - 1, col], newColor, originalColor);
  floodFill(arr, [row + 1, col], newColor, originalColor);
  floodFill(arr, [row, col - 1], newColor, originalColor);
  floodFill(arr, [row, col + 1], newColor, originalColor);

  return arr;
};

console.log(floodFill([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0]
], [2, 0], 5));

// [[ 1, 1, 1, 0, 0 ],
//  [ 5, 1, 0, 0, 1 ],
//  [ 5, 5, 1, 1, 0 ],
//  [ 5, 1, 1, 0, 0 ],
//  [ 5, 5, 1, 0, 0 ]]

console.log(floodFill([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0]
], [2, 2], 5));

// [[ 1, 1, 1, 0, 0 ],
//  [ 0, 1, 0, 0, 1 ],
//  [ 0, 0, 5, 5, 0 ],
//  [ 0, 5, 5, 0, 0 ],
//  [ 0, 0, 5, 0, 0 ]]