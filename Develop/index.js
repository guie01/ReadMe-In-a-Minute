const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project/application?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description of your project or application.',
      name: 'description',
      
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Enter test intructions',
        name: 'test',
      },
      {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
      },
      {
        type: 'list',
        choices: ['Apache License 2.0', 'BSD 3-Clause', 'BSD 2-Clause' , 'GNU General Public License', 'GNU Library', 'ISC License', 'MIT License', 'Mozilla Public License', 'Eclipse Public License version 2.0', 'Not listed'],
        message: 'Select a license',
        name: 'license',
      },
  ])
  .then((data) => {

    let readMeString = generateMarkdown(data);

    fs.writeFile("README.md", readMeString, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });