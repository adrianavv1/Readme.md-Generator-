// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(writeToFile);
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        name: "title",
        message: "What is the project title?",
        type: 'input'
    },
    {
        name: "description",
        message: "Please describe your project.",
        type: 'input'
    },
    {
        name: "installations",
        message: "installation instructions:",
        type: 'Input',
    },
    {
        name: "contribution",
        message: "Who contributed to your project?",
        type: 'input',
    },
    {
        name: "tests",
        message: "tests/instructions",
        type: 'input', 
    },
    {
        name: "usage",
        message: 'usage commands / instructions:',
        type: 'input',
    },
    {
        name: "username",
        message: 'GitHub username',
        type: 'input',

    },
    {
        name: "email",
        message: "email address",
        type: 'input',
    },
    {
        name: "license",
        message: "Please select a license.",
        type: 'list',
        choices: [
                "None",
                "MIT",
                "Mozilla 2.0",
                "Boost Software 1.0", 
                 "Apache 2.0",
                 "GNU AGPLv3", 
                 "GNU GPLv3",]
    },
])};
//function to initialize app
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! README.md file has been generated.")
    })
}

async function init() {
     try {
        const answers = await inquirer.prompt(questions);
        console.log("Your response: ", answers);
       
        const readme = generateMarkdown(answers);

        await writeFileAsync("README.md", readme);
        console.log("Succesfully written README.md");

    } catch (err) {
        console.log(err);
    }
}
// Function call to initialize app
init();

