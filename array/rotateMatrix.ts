/**
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel
 * in the image is 4 bytes, write a method to rotate the image by 90 degrees.
 * (an you do this in place?
 */

function rotateMatrix<T>(matrix: Array<Array<T>>) {
  const numberOfCycle = Math.floor(matrix.length / 2);
  for (let i = 0; i < numberOfCycle; i++) {
    for (let j = i, len = matrix.length; j < len - 1 - i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[len - j - 1][i];
      matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1];
      matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1];
      matrix[j][len - i - 1] = temp;
    }
  }

  return matrix;
}

console.log(rotateMatrix<number>([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
