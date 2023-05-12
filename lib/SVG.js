// Defining SVG class with a constructor and creating two properties with an empty
// string to store SVG elements representing text and shape
class SVG {
    constructor (){
        this.textElement = "";
        this.shapeElement = "";

    }
    // the code adds additional methods to the svg class. The render method generates
    // and returns an svg string including properties stored in the svg object
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }
    setText(message,color){
        this.textElement = `<text x="150" y="125" font-size="45" text-anchor="middle" fill="${color}">${message}</text>` 
    }
    setShape(shape){
        this.shapeElement = shape.render()
    }
}
// exports the svg class from the module, making it available for other modules
// to import and use.
module.exports = SVG;