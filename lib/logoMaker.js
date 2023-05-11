// Importing the shapes from the shapes.js file
const {Triangle, Circle, Square} = require("./shapes");

// Main class to create the logo
class LogoMaker {
    constructor(text, textColor, shapeType, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeType = shapeType;
        this.shapeColor = shapeColor;
    }
}
