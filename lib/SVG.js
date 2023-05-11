// Created SVG class. The "constructor" method is being called
// and initializes two instance properties: 'textElement' and 'shapeElement'
class SVG {
    constructor (){
        this.textElement = "";
        this.shapeElement = "";

    }
// This method returns a string that represents the full SVG code for the logo
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`

    }
}