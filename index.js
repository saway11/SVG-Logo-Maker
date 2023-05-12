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
    }
]