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
})