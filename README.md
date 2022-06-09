# yahcal

## What is yahcal?
yahcal is a simple library for using html canvas. it is simply a collection of functions make to be easily understood so that anyone can modify, add, remove, or change them any way to suit your purposes without the need to dive deep into how it works


Inside the public/src directory you will find the yahcal.js file
To use include yahcal.js in your html file like this:
```html 
<script src"./pathto/yahcal.js"></script>
  ```
Creating a Canvas:
```javascript 
// creating a canvas in yahcal is very simple
// the NewCanvas() function appends a new canvas element to the body of your html 
// all it needs from you is to give it a width and a height for the canvas you want to create
NewCanvas(500, 500)
```
Text Boxes:
```javascript
// This creates a new text box with the top left corner at (0, 0) using arial font with a font size of 15px,
// the maximum characters in a line is 10 and font colour is red
let text01 = new TextBox(0, 0, "arial", 15, 10, "red")
// write directly writes to the buffer of the text box and writeln will write a new line char after your text
text01.writeln("Hello")
text01.write("World!")
// Clear will clear the buffer
text01.clear()

```
