// Importing several modules
const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const { Triangle, Circle, Square } = require('./lib/shapes');
const SVG = require('./lib/SVG');

// An array of 'questions' that will be used for the user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo.',
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
        message: 'Enter the text color (keyword or hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Select a shape',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number)'
    }
];

// Created a prompt module using the inquirer.createPromptModule and passes
// the questions array as an argument. 
inquirer.createPromptModule(questions).then(({text, textColor, shapeType, shapeColor}) => {
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
// setting the color of the shape object using the setColor() method, passing the
// setColor value as an argument. A new SVG object was created and its 'setText()'
// method is called, passing the 'text' and 'textColor values as arguments. The 
// 'writeFile() function writes the rendered SVG content to the file
shape.setColor(shapeColor)
const svg = new SVG()
svg.setText(text, textColor)
svg.setShape(shape)
return writeFile("./examples/logo.svg", svg.render())


})

// added additional chaining to the previous code and it uses .then() to handle the
// successful completion of the file writing operation and logs a message to the console
.then(() => console.log("Generated logo.svg"))

// if an error occurs during the process, it will be caught by 'catch()' and the 
// error message will be logged to the console
.catch(err => console.log(err));