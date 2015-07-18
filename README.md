# Matrix Math for the Web

This content kit is brief overview of manipulating 3d objects with matrices (a concept from linear algebra.) Matrix math is used heavily in WebGL, but web developers are more familiar with DOM manipulations. This intro divorces the explanation of matrices from the WebGL APIs by using the CSS3 `matrix3d` transform.

It demonstrates translation, scale, and rotation transformations, as well as exploring how to compose a single matrix transform from multiple transforms through matrix multiplication.

## Lessons

Lesson          | JSFiddle                                                       | Code
--------------- | -------------------------------------------------------------- | --------------------------------------------
Multiplication  | TODO                                                           | [01-multiplication](lessons/02-translation/)
Translation     | [Live Example](https://jsfiddle.net/tatumcreative/g24mgw6y/)   | [02-translation](lessons/02-translation/)
Scale           | TODO                                                           | [03-scale](lessons/03-scale/)
Rotation Basics | TODO                                                           | [04-rotate](lessons/04-rotate/)
Rotate X/Y/Z    | TODO                                                           | [05-rotate-all](lessons/05-rotate-all/)
Composition     | TODO                                                           | [06-composition](lessons/06-composition/)

## Navigating the lessons

Lessons are located both in this repo and on JSFiddle. The `.js` files contain the lessons as comments next to the live code. The lessons are designed so that the code can be edited and tweaked for experimentation while following along. When working from the code in the repo, the lessons are located in `/lessons` and are in alphabetical order.

## Shared JavaScript Functions

The lessons share some common code functions that can be found in the `/shared` folder. When working from JSFiddle the shared functions are located below the lessons.

### matrixArrayToCssMatrix(array)

Takes an array of 16 numbers, and returns a string of the form `"matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"`

### multiplyMatrices(a, b)

Multiplies the matrices `a` and `b` and returns the result.

### multiplyArrayOfMatrices(matrices)

Takes an array of matrices, and returns the multiplied result.
