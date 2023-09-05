// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project: ',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'githubUser',
        message: 'Enter your Github Username: ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter your Username please.')
                return false
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please input your email: ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Enter your email please.")
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'what',
        message: 'What is your project and what problem will it solve?',
        validate: whatInput => {
            if (whatInput) {
                return true;
            }else{
                console.log('Please enter the relevent information');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            }else{
                console.log("please enter the relevent information");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'how',
        message: 'How would somebody use this?',
        validate: howInput => {
            if (howInput) {
                return true;
            }else{
                console.log('Please enter the relevent information');
                return ;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions!');
                return false;
            }
        }
    },

    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
