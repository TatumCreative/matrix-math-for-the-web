/*

  The real power of matrices come from matrix composition. When a certain class of matrices
  are multiplied together they preserve the history of the transformations and are reversible.
  The order that matrices are multiplied in matters because matrices are "non-commutative"
  Matrix transformation known as
  "affine transformations" preserve the relationships between the points in a way that is
  reversible.
  In typical (cartesian) coordinates this would be stretching and shrinking in x, y, and z.

*/

var w = 1.5; // width  (x)
var h = 0.7; // height (y)
var d = 1;   // depth  (z)

var scaleMatrix = [
    w,    0,    0,   0,
    0,    h,    0,   0,
    0,    0,    d,   0,
    0,    0,    0,   1
];

var moveMe = document.getElementById('move-me');

var matrix3dRule = matrixArrayToCssMatrix( scaleMatrix );

moveMe.style.transform = matrix3dRule;