//* Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//* Create an array of questions for user input
const questions = [
  {
    //project title
    type: 'input',
    name: 'title',
    message: 'What is the title of the README.md file?'
  },
  {
    //description
    type: 'input',
    name: 'description',
    message: 'What is the despription of the README.md file?'
  },
  {
    //installation instructions
    type: 'input',
    name: 'installation',
    message: 'What is the installation instructions of the README.md file?'
  },
  {
    //usage information
    type: 'input',
    name: 'usage',
    message: 'What is the usage information of the README.md file?'
  },
  {
    //contribution guidelines
    type: 'input',
    name: 'contribution',
    message: 'What is the contribution guidelines of the README.md file?'
  },
  {
    //test instructions
    type: 'input',
    name: 'tests',
    message: 'What is the test instructions of the README.md file?'
  },
  {
    // WHEN I enter my email address
    
    type: 'email',
    name: 'email',
    message: 'What is your email address if someone has questions?'
  },
  {
    //License selector
    type: 'checkbox',
    name: 'license',
    message: 'What license does the project use?'
  },
  {
    //GitHub username
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  }
 
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
