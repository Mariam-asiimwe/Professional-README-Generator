import inquirer from 'inquirer';
import fs from "fs/promises";

let { title, description, contents, installation, usage, size, contributing, tests, questions } = await inquirer
  .prompt([
    {
      type: 'input',
      name: 'project title',
      message: "Write the title of your protect:",
    },
    {
      type: 'input',
      name: 'description',
      message: "Write a description of your project:",
    },
    {
      type: 'input',
      name: 'contents',
      message: "List your table of contents:",
      default() {
        return '';
      },
    },
    {
      type: 'input',
      name: 'installation',
      message: "Write a step by step guide required for installation:",
    },
    {
      type: 'input',
      name: 'usage',
      message: "Write instructions on how to use the project with examples:",
      default() {
        return '';
      },
    },
    {
      type: 'list',
      name: 'size',
      message: 'What size do you need?',
      choices: ['jumbo', 'large', 'standard'],
      filter(val) {
        return val.toLowerCase();
      },
    },
    {
      type: 'input',
      name: 'constributing',
      message: "Provide details of any contributors to the project:",
    },
    {
      type: 'input',
      name: 'Tests',
      message: "Write tests for your project with examples:",
      default() {
        return '';
      },
    },
    {
      type: 'input',
      name: 'Questions',
      message: "Provide contact details for users with further questions:",
      default() {
        return 'GitHub username:', 'Email';
      }
    },

  ])

let readmeText = `# Project Description
  ${description}
  
## The second largest heading
  
${generateLicense(size)}

###### The smallest heading`
  `# List of Contents
## The second largest heading
###### The smallest heading`

// ${ contents }
// ${ installation }
// ${ usage }
// ${ contributing }
// ${ tests }
// ${ questions }
fs.writeFile("README.md", readmeText)
// console.log(response);

function generateLicense(license) {
  console.log(license);

  if (license === "jumbo") {
    //MIT, ODbL, CC0
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    // else if (license === "Large") {
    //   return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"

  }
  // else {
  //   return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"

  // }
}
// project title (Description, Installation, Usage, Contributing, and Tests)
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License (list of options then a badge for that license is added near the top of the README)
// * Contributing
// * Tests
// * Questions (GitHub username with a link to their GitHub profile,
           //email address with instructions on how to reach them with additional questions)