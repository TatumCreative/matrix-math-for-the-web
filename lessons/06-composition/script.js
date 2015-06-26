/*

  The real power of matrices come from matrix composition. When matrices of a a certain class
  are multiplied together they preserve the history of the transformations and are reversible.
  This means that if a translation, rotation, and scale matrix are all combined together,
  when the order of the matrices is reversed, and re-applied then the original points are returned.

  The order that matrices are multiplied in matters. When multiplying numbers a * b = c, and
  b * a = c are both true. For example 3 * 4 = 12, and 4 * 3 = 12. The math term for this is
  that the multiplication of numbers is commutative. Matrices are not guaranteed to be the
  same if the order is switched, so matrices are non-commutative.

  Another mind-bender is that matrix multiplication needs to happen in the reverse order that
  the operations intuitively happens. For instance to scale something down by 80%, move it down
  200 pixels, and then rotate about the origin 90 degrees would look something like this in code:

  transformation = rotate * translate * scale

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

function translate(x, y, z) {
	return [
	    1,    0,    0,   0,
	    0,    1,    0,   0,
	    0,    0,    1,   0,
	    x,    y,    z,   1
	];
}

function scale(w, h, d) {
	return [
	    w,    0,    0,   0,
	    0,    h,    0,   0,
	    0,    0,    d,   0,
	    0,    0,    0,   1
	];
}


var transformMatrix = multiplyArrayOfMatrices([

	// Uncomment below to reverse the transformation:
	
	/*
		scale(1.25, 1.25, 1.25),           // Step 6: scale back up
		translate(0, -200, 0),             // Step 5: move back up
		rotateAroundZAxis(-Math.PI * 0.5), // Step 4: rotate back
	*/
	
	rotateAroundZAxis(Math.PI * 0.5),    // Step 3: rotate around 90 degrees
	translate(0, 200, 0),                // Step 2: move down 100 pixels
	scale(0.8, 0.8, 0.8),                // Step 1: scale down

	
])

var moveMe = document.getElementById('move-me');

var matrix3dRule = matrixArrayToCssMatrix( transformMatrix );

moveMe.style.transform = matrix3dRule;