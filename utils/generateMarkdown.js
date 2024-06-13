// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None"){
    return "";
  }
  return `![License](https://img.shields.io/badge/License-${license.replace(
    " ",
    "%20"
  )}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === "None") {
return "";
}
return `[${license}](https://choosealicense.com/licenses/${license
.toLowerCase()
.replace(" ", "-")}/)`;
} 


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return "";
  }
  return `## License 

  This project is licensed under the ${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ##Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests] (#tests)
  - [Questions](#questions)
  ${data.license !=="None"? "- [License](#license)":""}


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}
  
  ## Tests 
  ${data.tests}

  ## Questions 
  For any questions about our work: 
  [GitHub](https://github.com/${
    data.github
  }) or reach us via email at ${data.email}.

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
