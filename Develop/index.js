const fs = require('fs');
const inquirer = require('inquirer');

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
  ])
  .then((data) => {

    let readMeString = `# ${data.title}

## Table of Contents
1. [ Application Description. ](#application)
2. [ Installation. ](#installation)
2. [ Usage. ](#usage)
3. [ Contributing. ](#contribution)
4. [ Test. ](#test)
5. [ Questions. ](#questions)
6. [ The other stuff: License & Badges. ](#license)


<a name="application"></a>
## Application Description.

${data.description}.
<a name="installation"></a>
## Installation.

${data.installation}.

<a name="usage"></a>
## Usage

${data.usage}.

<a name="contribution"></a>
## Contributing

${data.contribution}.

<a name="test"></a>
## Test

${data.test}.

<a name="questions"></a>
## Questions

If you have any questions, feel free to contact at ${data.email}. Don't forget to check my GitHub profile: ${data.github}.

<a name="license"></a>
## Licenses & Badges

.
`

    fs.writeFile("README.md", readMeString, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });