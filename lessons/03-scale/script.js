/*

  A scale matrix makes something larger or smaller in one of 3 dimension: width, height, and depth.
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