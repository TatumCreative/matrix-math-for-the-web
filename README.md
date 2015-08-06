# Matrix Math for the Web

This content kit is brief overview of manipulating 3d objects with matrices (a concept from linear algebra.) Matrix math is used heavily in WebGL, but web developers are more familiar with DOM manipulations. This intro divorces the explanation of matrices from the WebGL APIs by using the CSS3 `matrix3d` transform.

It demonstrates translation, scale, and rotation transformations, as well as exploring how to compose a single matrix transform from multiple transforms through matrix multiplication.

## Lessons

Lesson          | JSFiddle                                                       | Code
--------------- | -------------------------------------------------------------- | --------------------------------------------
Multiplication  | TODO                                                           | [01-multiplication](lessons/01-multiplication/)
Translation     | [Live Example](https://jsfiddle.net/tatumcreative/g24mgw6y/)   | [02-translation](lessons/02-translation/)
Scale           | TODO                                                           | [03-scale](lessons/03-scale/)
Rotation Basics | TODO                                                           | [04-rotate](lessons/04-rotate/)
Rotate X/Y/Z    | TODO                                                           | [05-rotate-all](lessons/05-rotate-all/)
Composition     | TODO                                                           | [06-composition](lessons/06-composition/)

## Navigating the lessons

Lessons are located both in this repo and on JSFiddle. The `.js` files contain the lessons as comments next to the live code. The lessons are designed so that the code can be edited and tweaked for experimentation while following along. When working from the code in the repo, the lessons are located in `/lessons` and are in alphabetical order.

## Getting started (10 min)

The lessons can either be worked online from JSFiddle, or downloaded and explored locally. The content of the lessons is mixed in with the code. The `script.js` files contain most of the lesson, while the `index.html` contains the HTML. To download these files either [grab the zip file](https://github.com/TatumCreative/mdn-lighting-models/archive/master.zip) or run `git clone git@github.com:TatumCreative/mdn-lighting-models.git` from the command line.

#### Working locally checklist

 1. Verify browser supports unprefixed CSS3 transforms.
 2. Download the lesson files to your machine.
 3. Open the lessons in the browser:
   * Either open the index.html files from the lessons in your browser
   * Or if you are serving files with a local webserver, make sure and serve them from the root directory of the content kit so that the shared js files can be correctly loaded in.

#### Working on JSFiddle checklist

 1. Verify browser supports unprefixed CSS3 transforms.
 2. Visit the JSFiddle links

## Lesson requirements

These lessons require a [browser that supports unprefixed CSS3 3d transforms.](http://caniuse.com/#feat=transforms3d). The browsers that support this feature are Firefox 16+, Google Chrome 36+, Opera 23+, Safari 9+ and Internet Explorer 10+. It's assumed that the audience is familiar with a basic level web development, CSS, markup, and JavaScript.

## Updates and Correction

[Submit an issue](./issues) or a [pull request](https://help.github.com/articles/using-pull-requests/) for any corrections or updates. For a history of the updates visit the [commit history](https://github.com/TatumCreative/mdn-lighting-models/commits/master).