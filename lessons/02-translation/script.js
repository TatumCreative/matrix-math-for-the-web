/*

  A translation matrix is based off the identity matrix. It moves the object
  in one of 3 directions, x, y, or z. The easiest way to think of a translation
  is like picking up a coffee cup. The coffee cup must be kept upright and oriented
  the same way so that no coffee is spilt. It can move up in the air off the table
  and around the air in space.

  Now the coffee can't actually be drank with only a translation matrix because
  tilt the cup cannot be tilted. Another matrix will be discussed that will be able
  to handle that task.

*/

var x = 50;
var y = 100;
var z = 0;

var translationMatrix = [
    1,    0,    0,   0,
    0,    1,    0,   0,
    0,    0,    1,   0,
    x,    y,    z,   1
];

// Grab the DOM element
var moveMe = document.getElementById('move-me');

// Returns a result like: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 100, 200, 0, 1);"
var matrix3dRule = matrixArrayToCssMatrix( translationMatrix );

// Set the transform
moveMe.style.transform = matrix3dRule;