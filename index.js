// Importing three modules in node.js
const fs = require('fs');
const {isValidColor} = require("./lib/color");
const LogoMaker = require("./lib/logoMaker");


(async () => {
    
    // importing the inquirer package
    const {default: inquirer} = await import('inquirer');

// Created questions for the user to answer
async function promptUser() {
    const questions = [
        {
            type: "list",
            name: "shape",
            message: "Choose a shape for your logo.",
            choices: ["Triangle", "Circle", "Square"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color do you want your shape to be?",
            validate: (input) => {
                if (isValidColor(input)) {
                    return true;
                }
                return "Please enter a valid color keywork or hexadecimal number.";
            },
        },
        {
           type: "input",
           name: "text",
           message: "Enter 3 characters for your logo.",
           validate: (input) => {
            if (input.length > 3) {
                return "Please enter exactly 3 characters.";
            }
            return true;
           },
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter a color / hexadecimal for your logo text.",
            validate: (input) => {
                if (isValidColor(input)) {
                    return true;
                }
                return "Please enter a valid color keyword or hexadecimal number.";
            },
        }
    ];

    // using inquirer package to prompt the user with a set of questions defined in the 
    // questions variable
    const answer = await inquirer.prompt(questions);
    return answers;
}

// allows user to input answers while gathering all the answers
// and pushing them into the logoMaker class
// the logoMaker class is used to generate the logo and save is to
// the logo file
async function main() {
    const answers = await promptUser();
    const logoMaker = new LogoMaker(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
    );
    const svgMarkup = logoMaker.generateLogo();
    saveSVGToFile(svgMarkup);
    console.log("Generated logo.svg");
}

// creating file that contains the svg logo
function saveSVGToFile(svgMarkup) {
    fs.writeFileSync("logo.svg", svgMarkup, "utf8");
}

main();
})();