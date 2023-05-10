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
    }
]