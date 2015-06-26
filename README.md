# Matrix Math for the Web

This content kit is brief overview of manipulating 3d objects with matrices, a concept from linear algebra. Matrix math is used heavily in WebGL, but Web Developers are more familiar with DOM manipulation. This intro divorces the explanation of matrices from the WebGL APIs by using the CSS3 `matrix3d` transform.

It demonstrates translation, scale, and rotation transformations, as well as exploring how to compose a single matrix transform from multiple transforms through matrix multiplication.

## Lessons

Lesson          | JSFiddle                                                       | Code
--------------- | -------------------------------------------------------------- | --------------------------------------------
Multiplication  | TODO                                                           | TODO
Translation     | [Live Example](https://jsfiddle.net/tatumcreative/g24mgw6y/)   | [script.js](lessons/02-translation/script.js)
Scale           | TODO                                                           | [script.js](lessons/03-scale/script.js)
Rotation Basics | TODO                                                           | [script.js](lessons/04-rotate/script.js)
Rotate X/Y/Z    | TODO                                                           | [script.js](lessons/05-rotate-all/script.js)
Composition     | TODO                                                           | [script.js](lessons/06-composition/script.js)

## Navigating the lessons

Lessons are located both in this repo and on JSFiddle. The `.js` files contain the lessons as comments next to the live code. The lessons are designed so that the code can be edited and tweaked for experimentation while reading along. When working from the code in the repo, the lessons are located in `/lessons` and are in alphabetical order. The lessons share some common code functions that can be found in the `/shared` folder. When working from JSFiddle the shared functions are pasted below the lessons.

## Shared JavaScript Functions

### matrixArrayToCssMatrix(array)

Takes a an array of 16 numbers, and returns a string of the form `"matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"`

### multiplyMatrices(a, b)

Multiplies the matrices `a` and `b` and returns the result.

### multiplyArrayOfMatrices(matrices)

Takes an array of matrices, and returns the multiplied result.