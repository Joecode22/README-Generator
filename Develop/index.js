//* Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//require exported functions from another file
const genMark = require('./utils/generateMarkdown');

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
    message: 'What is the command to install the necessary dependencies?'
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
    message: 'What is the test command?'
  },
  {
    //email address
    type: 'input',
    name: 'email',
    message: 'What is your email address if someone has questions?'
  },
  {
    //license selector
    type: 'list',
    name: 'license',
    message: 'What license does the project use?',
    choices: ['Apache', 'Boost', 'MIT', 'Mozilla']
  },
  {
    //GitHub username
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  }
 
];


//* Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err){
      console.log(err);
    } else {
      console.log('Success');
    }
  });
}

//* Create a function to initialize app
async function init() {
  const data = await inquirer.prompt(questions);
  console.log(data.license)
  const markdown = genMark.generateMarkdown(data);
  writeToFile('README.md', markdown);
}

// Function call to initialize app
init();
