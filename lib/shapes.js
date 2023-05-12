// defining 'shape' class with a constructor and a setColor() method
class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color){
        this.color = color
    }

}
// defining three classes 'triangle', 'circle', and 'square', which extend the shape
// class. Each class provides its own render() method. The render method generates an
// SVG string representing a shape with the specified color property.
class Triangle extends Shape {
    render() {
        return `<polygon fill="${this.color}" points="150,18 244, 182 56, 182" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle fill="${this.color}" cx="150" cy="100" r="80" />`;
    }
}
class Square extends Shape {
    render() {
        return `<rect width="120" height="120" x="90" y="40" fill="${this.color}" />`;
    }
}