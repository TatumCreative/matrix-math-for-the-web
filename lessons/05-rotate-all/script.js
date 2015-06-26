/*

  Here are the other rotation matrices. One big note is that there is no perspective
  applied, so it might not feel very 3d yet. The flatness is equivalent to when a camera
  zooms in really close onto an object in the distance, the sense of perspective disappears.

*/

var sin = Math.sin;
var cos = Math.cos;

function rotateAroundXAxis(a) {
  
  return [
       1,       0,        0,     0,
       0,  cos(a),  -sin(a),     0,
       0,  sin(a),   cos(a),     0,
       0,       0,        0,     1
  ];
}

function rotateAroundYAxis(a) {
  
  return [
     cos(a),   0, sin(a),   0,
          0,   1,      0,   0,
    -sin(a),   0, cos(a),   0,
          0,   0,      0,   1
  ];
}

function rotateAroundZAxis(a) {
  
  return [
    cos(a), -sin(a),    0,    0,
    sin(a),  cos(a),    0,    0,
         0,       0,    1,    0,
         0,       0,    0,    1
  ];
}

// var matrix = rotateAroundXAxis( Math.PI * 0.3 );
// var matrix = rotateAroundYAxis( Math.PI * 0.3 );
var matrix = rotateAroundZAxis( Math.PI * 0.3 );

var moveMe = document.getElementById('move-me');
var matrix3dRule = matrixArrayToCssMatrix( matrix );
moveMe.style.transform = matrix3dRule;