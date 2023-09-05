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
        message: 'Please provide step-by-step installation instructions for your project.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Pease provide step-by-step installation instructions for your project: ',
        validate: installInput => {
            if (installInput) {
                return true;
            }else{
                console.log('please enter installation instructions.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please give use cases and examples: ',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }else{
                console.log('Enter use instructions.');
                return false
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Select the license you would like to use for your project',
        choices: ['agpl', 'zlib', 'mit', 'apache', 'no license'],
    },

    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other developers to contribute?',
        default: true
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'Provide contribution guidelines: ',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Provide contribution guidelines.')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: 'Provide testing instructions',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Provide testing instructions.');
                return false;
            }
        }
    }

];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};
// TODO: Create a function to initialize app
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})