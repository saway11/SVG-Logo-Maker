// imports the triangle, circle, and square classes from the shapes file
const { Triangle, Circle, Square } = require("./shapes");

// defines a test case using a testing framework. It describes a test suite for the triangle, circle, and
// square class
describe("Triangle", () => {
    it("should render a Triangle", () => {
        const triangle = new Triangle();
        const expectedSvg = '<polygon fill="green" points="150,18 244, 182 56, 182" />';
        triangle.setColor('green')
        const testSvg = triangle.render();
        expect(testSvg).toEqual(expectedSvg);
    });
});
