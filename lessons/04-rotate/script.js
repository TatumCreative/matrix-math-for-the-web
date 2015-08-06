/*

  Rotation matrices start looking a little bit more complicated than scaling and transform
  matrices. They use trigonometric functions to perform the rotation. While this section
  won't break the steps down into exhaustive detail, take this example for illustration.


    // Manually rotating a point about the origin without matrices
    var point = [10,2];

    // Calculate the distance from the origin
    var distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]);

    // 60 degrees
    var rotationInRadians = Math.PI / 3; 

    var transformedPoint = [
      Math.cos( rotationInRadians ) * distance,
      Math.sin( rotationInRadians ) * distance
    ];


  It is possible to encode these type of steps into a matrix, and do it each of the
  x, y, and z dimensions. Below is the representation of a rotation about the X axis

*/

var sin = Math.sin;
var cos = Math.cos;

// NOTE: There is no perspective in these transformations, so a rotation
//       at this point will only appear to only shrink the div

var a = Math.PI * 0.3; //Rotation amount

// Rotate around Z axis
var rotateZMatrix = [
  cos(a), -sin(a),    0,    0,
  sin(a),  cos(a),    0,    0,
       0,       0,    1,    0,
       0,       0,    0,    1
];

var moveMe = document.getElementById('move-me');

var matrix3dRule = MDN.matrixArrayToCssMatrix( rotateZMatrix );

moveMe.style.transform = matrix3dRule;