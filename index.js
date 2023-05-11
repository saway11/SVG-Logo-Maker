const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const { Triangle, Circle, Square } = require('./lib/shapes');
const SVG = require('./lib/SVG');

// created an array for questions that contains an object defining a prompt for user input.
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: function(value) {
            if (value.length > 3) {
                return 'Text must be less than or equal to three characters';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number:'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Select a shape:',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):'
    }
];

// Created a prompt module based on the "questions" array defined above.
inquirer.createPromptModule(questions).then(({text, textcolor, shapeType, shapeColor}) => {
    let shape;

    switch (shapeType) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        default:
            shape = new Square();
            break;     
    }
// setting the color of the same object. 
// The writeFile method returns a promise which is chained to .then method to log a success
// message to the console once the file has been written.
// If there is an error at any point in the chain it will be caught
// and the error message will be logged to the console.
shape.setColor(shapeColor)
const svg = new SVG()
svg.setText(text, textColor)
svg.setShape(shape)
return writeFile('./examples/logo.svg', svg.render)
})
.then(() => console.log("Generated logo.svg"))

.catch(err => console.log(err));