// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
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
        name: "license",
        message: "Please describe your project.",
        type: 'list',
        choices: [
                "MIT",
                "Mozilla 2.0",
                "Boost Software", 
                 "Apache",
                 "GNU AGPLv3", 
                 "GNU GPLv3",]
    },
    {
        name: "contributing",
        message: "Who contributed to your project?",
        type: 'input',
    },
    {
        name: "tests",
        message: "tests/instructions",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
const init = async() => {

    try
    {
        const answers = await promptUser();
        const md = generateReadMe(answers);
        
        await fs.writeFileAsync("README.md", md)
    } catch(err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
