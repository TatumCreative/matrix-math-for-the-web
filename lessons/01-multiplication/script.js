/*
  To start, a 3d transformation matrix is a set of 16 values arranged in a 4x4 grid.
  In JavaScript it is easy to represent a matrix as an array. The typical starting
  point is to show the identity matrix. When this matrix is multiplied against another
  point or matrix then the result will be identical.
*/

var identityMatrix = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
];

/*
  Speaking of multiplication, what does this operation look like in a matrix? The easier
  example is to show the multiplication of a single point. You may not that a 3d point
  doesn't quite match up with a 4x4 matrix, so typically a fourth dimension W is added.
  For a typical position setting this value to 1 will make the math work out.

  Notice how the matrix and point line up:

  [ 1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1 ]

  [ 4, 3, 2, 1]

  Note: The W component eventually has some additional uses that are not explored
  by this content kit.

*/

function multiplyMatrixAndPoint(matrix, point) {
  
  //Give a simple variable name to each part of the matrix, a column and row number
  var c0r0 = matrix[ 0], c1r0 = matrix[ 1], c2r0 = matrix[ 2], c3r0 = matrix[ 3];
  var c0r1 = matrix[ 4], c1r1 = matrix[ 5], c2r1 = matrix[ 6], c3r1 = matrix[ 7];
  var c0r2 = matrix[ 8], c1r2 = matrix[ 9], c2r2 = matrix[10], c3r2 = matrix[11];
  var c0r3 = matrix[12], c1r3 = matrix[13], c2r3 = matrix[14], c3r3 = matrix[15];
  
  //Now set some simple names for the point
  var x = point[0];
  var y = point[1];
  var z = point[2];
  var w = point[3];
  
  //Multiply the point against each part of the 1st column, then add together
  var resultX = (x * c0r0) + (y * c0r1) + (z * c0r2) + (w * c0r3);
  
  //Multiply the point against each part of the 2nd column, then add together
  var resultY = (x * c1r0) + (y * c1r1) + (z * c1r2) + (w * c1r3);
  
  //Multiply the point against each part of the 3rd column, then add together
  var resultZ = (x * c2r0) + (y * c2r1) + (z * c2r2) + (w * c2r3);
  
  //Multiply the point against each part of the 4th column, then add together
  var resultW = (x * c3r0) + (y * c3r1) + (z * c3r2) + (w * c3r3);
  
  return [resultX, resultY, resultZ, resultW]
}

/*
  Now try multiplying the point by the matrix. It should return the exact same value.
*/

multiplyMatrixAndPoint(identityMatrix, [4,3,2,1]); // Returns [4,3,2,1]

/*
  Returning the same point is not very useful, but there are other types of
  matrices that can perform helpful operations on points. The next sections
  will demonstrate some of these matrices.

  In addition to to multiplying a matrix and a point together you can also
  multiply two matrices together. The function from above can be re-used
  to help out in this process.
*/

function multiplyMatrices(matrixA, matrixB) {
  
  // Slice the second matrix up into columns
  var column0 = [matrixB[0], matrixB[4], matrixB[8], matrixB[12]];
  var column1 = [matrixB[1], matrixB[5], matrixB[9], matrixB[13]];
  var column2 = [matrixB[2], matrixB[6], matrixB[10], matrixB[14]];
  var column3 = [matrixB[3], matrixB[7], matrixB[11], matrixB[15]];
  
  // Multiply each column by the matrix
  var result0 = multiplyMatrixAndPoint( matrixA, column0 );
  var result1 = multiplyMatrixAndPoint( matrixA, column1 );
  var result2 = multiplyMatrixAndPoint( matrixA, column2 );
  var result3 = multiplyMatrixAndPoint( matrixA, column3 );
  
  // Turn the result columns back into a single matrix
  return [
    result0[0], result1[0], result2[0], result3[0],
    result0[1], result1[1], result2[1], result3[1],
    result0[2], result1[2], result2[2], result3[2],
    result0[3], result1[3], result2[3], result3[3]
  ]
}

var someMatrix = [
  4, 0, 0, 0,
  0, 3, 0, 0,
  0, 0, 5, 0,
  4, 8, 4, 1
]

multiplyMatrices(identityMatrix, someMatrix);