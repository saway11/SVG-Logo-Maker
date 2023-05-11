// Created a shape class and three shape classes that
// will extend it
class Shape {
    constructor(color) {
        // users input is needed in order for the color to change
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,10 270,190 30,190" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return  `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="30" y="30" width="240" height="240" fill="${this.color}" />`;
    }
}

// exporting an object containing three classes 'triangle', 'circle', 'square'
module.exports = { Triangle, Circle, Square};