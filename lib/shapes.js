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