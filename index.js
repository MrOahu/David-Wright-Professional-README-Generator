// TODO: Include packages needed for this application
// "require" means import
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
// contributing, tests, license with badge, github, email
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your application."
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description of your application"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter any installation instructions for your app."
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter any usage instructions for your app."
    },
    {
        type: "input",
        name: "contribution",
        message: "Please list any contributors to your application."
    },
    {
        type: "input",
        name: "test",
        message: "Please list any test instructions for your app if applicable."
    },
    //place license here
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
       console.log(data)
        fs.writeFileSync("readmetest.md", generateMarkdown(data) )
    })
}

// Function call to initialize app
init();
