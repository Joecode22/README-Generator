//* Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case "Boost":
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    case "MIT":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case "Mozilla":
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
}

//* Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

  ${data.description}

## Table of Contents

## Installation

To install necessary dependencies, run the following command: 
\`\`\`bash
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contribution}

## Tests

to run tests, run the following command:
\`\`\`bash
${data.tests}
\`\`\`

## Questions

if you have any questions about the repo, open an issue or contact me at ${data.email}. You can find more of my work at: [${data.github}](https://github.com/${data.github})



`;
}

module.exports = {
  generateMarkdown: generateMarkdown,
  renderLicenseBadge: renderLicenseBadge,
};
