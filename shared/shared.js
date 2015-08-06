var MDN = MDN || {};

MDN.matrixArrayToCssMatrix = function (array) {
  return "matrix3d(" + array.join(',') + ")";
}

MDN.multiplyMatrixAndPoint = function (matrix, point) {
  
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
  
  return [resultX, resultY, resultZ, resultW];
}

MDN.multiplyMatrices = function (matrixA, matrixB) {

  // A faster implementation of this function would not create
  // any new arrays. This creates arrays for code clarity.
  
  // Slice the second matrix up into rows
  var row0 = [matrixB[0], matrixB[1], matrixB[2], matrixB[3]];
  var row1 = [matrixB[4], matrixB[5], matrixB[6], matrixB[7]];
  var row2 = [matrixB[8], matrixB[9], matrixB[10], matrixB[11]];
  var row3 = [matrixB[12], matrixB[13], matrixB[14], matrixB[15]];
  
  // Multiply each row by the matrix
  var result0 = MDN.multiplyMatrixAndPoint( matrixA, row0 );
  var result1 = MDN.multiplyMatrixAndPoint( matrixA, row1 );
  var result2 = MDN.multiplyMatrixAndPoint( matrixA, row2 );
  var result3 = MDN.multiplyMatrixAndPoint( matrixA, row3 );
  
  // Turn the results back into a single matrix
  return [
	  result0[0], result0[1], result0[2], result0[3],
	  result1[0], result1[1], result1[2], result1[3],
	  result2[0], result2[1], result2[2], result2[3],
	  result3[0], result3[1], result3[2], result3[3],
  ];
}

MDN.multiplyArrayOfMatrices = function (matrices) {
  
  var inputMatrix = matrices[0];
  
  for(var i=1; i < matrices.length; i++) {
    inputMatrix = MDN.multiplyMatrices(inputMatrix, matrices[i]);
  }
  
  return inputMatrix;
}