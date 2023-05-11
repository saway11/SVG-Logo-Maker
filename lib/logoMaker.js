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
// Get the users input to create the shape type assign to the shapeObject
// variable
createShape() {
    let shapeObject;
    switch (this.shapeType) {
        case "Triangle":
            shapeObject = new Triangle(this.shapeColor);
            break;
        case "Circle":
            shapeObject = new Circle(this.shapeColor);
            break;
        case "Square":
            shapeObject = new Square(this.shapeColor);
        default: throw new Error("Invalid shape type");
}
    return shapeObject;
    }
}
