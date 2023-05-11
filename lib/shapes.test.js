// import shapes
const {Triangle, Circle, Square} = require('./shapes');

// testing shape class
describe('shapes', () => {

// defines a test suire using the jest testing framework
// for a triangle class. the test suite contains
// a single test case, which checks that the 'render()' method of the 'Triangle'
// class returns a string of SVG code containing the specified fill
// color
    describe('Triangle', () => {
        it('should return a string of code for svg', () => {
            const triangle = new Triangle('red');
            const svg = triangle.render();
            expect(svg).toEqual(expect.any(String));
            expect(svg).toContain('fill="red"')
        })
    })
})

