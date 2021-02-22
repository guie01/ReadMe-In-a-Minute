// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === 'BSD 3-Clause') {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === 'BSD 2-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === 'GNU General Public License'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'GNU Library'){
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (license === 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Mozilla Public License'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }else if (license === 'Eclipse Public License version 2.0'){
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'ISC License'){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === 'Not listed'){
    return ''
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {


  return `<a name="license"></a>
  ## Licenses & Badges
  ${renderLicenseBadge(license)}
  .`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  
  ${renderLicenseSection(data.license)}.
  
  `;
}

module.exports = generateMarkdown;
