/**
 *
 * Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0,
 * its entire row and column are set to O.
 */

function zeroMatrix(matrix: Array<Array<number>>) {
  const foundRows = [];
  const foundColumns = [];

  for (let i = 0, rowLen = matrix.length; i < rowLen; i++) {
    for (let j = 0, columnLen = matrix[i].length; j < columnLen; j++) {
      if (matrix[i][j] === 0) {
        foundRows.indexOf(i) === -1 && foundRows.push(i);
        foundColumns.indexOf(j) === -1 && foundColumns.push(j);
      }
    }
  }

  for (const row of foundRows) {
    for (let column = 0, len = matrix[0].length; column < len; column++) {
      matrix[row][column] = 0;
    }
  }

  for (const column of foundColumns) {
    for (let row = 0, len = matrix.length; row < len; row++) {
      matrix[row][column] = 0;
    }
  }

  return matrix;
}

console.log(zeroMatrix([[0, 2, 3], [4, 5, 6], [7, 0, 9]]));
