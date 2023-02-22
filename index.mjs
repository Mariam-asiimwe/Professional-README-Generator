import inquirer from 'inquirer';
import fs from "fs/promises";

let { title, description, contents, installation, usage, size, collaborators, tests, questions } = await inquirer
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
      name: 'collaborators',
      message: "Provide details of any contributors to the project:",
    },
    {
      type: 'input',
      name: 'Tests',
      message: "Write tests for your project with examples:",
      // default() {
      //   return '';
      // },
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

let readmeText = `# Project Title
  
${generateLicense(size)}
`
// # List of Contents
function generateLicense(license) {
  console.log(license);

  if (license === "jumbo") {
    //MIT, ODbL, CC0
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license === "large") {
    return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"

  }
  else (license === "standard")
  return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"

}



// fs.writeFile(
//   "README.md",
//   `
//   # example 
//   ${process.argv[2]}
//   # license
//   ${process.argv[3]}`,
//   (err) => (err ? console.error(err) : console.log("Success!"))
// # Title
// ${title}
// );


fs.writeFile("README.md",
  `## Description 
  ${description}
  ## Table of contents
  ${contents}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## Licenses
  ${size}
  ## Contributing
  ${collaborators}
  ## Tests
  ${tests}
  ## Questions
  ${questions}
  
  `
)


