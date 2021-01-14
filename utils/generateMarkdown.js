// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ``;
  } else if (license === "Apache 2.0") {
    return `<a href="https://img.shields.io/badge/License-Apache2.0-yellowgreen?style=plastic"><img alt="Apache 2.0 License used" src="https://img.shields.io/badge/License-Apache2.0-yellowgreen?style=plastic"></a>`;
  } else if (license === "MIT") {
    return  `<a href="https://img.shields.io/badge/License-MIT-yellowgreen?style=plastic"><img alt="MIT License used" src="https://img.shields.io/badge/License-MIT-yellowgreen?style=plastic"></a>`; 
  } else if (license === "Mozilla 2.0") {
    return `<a href="https://img.shields.io/badge/License-Mozilla2.0-yellowgreen?style=plastic"><img alt="Mozilla 2.0 License used" src="https://img.shields.io/badge/License-Mozilla2.0-yellowgreen?style=plastic"></a>`;
  } else if (license === "GNU AGPLv3") {
    return `<a href="https://img.shields.io/badge/License-GNUAGPLv3-yellowgreen?style=plastic"><img alt="GNU AGPLv3 License used" src="https://img.shields.io/badge/License-GNUAGPLv3-yellowgreen?style=plastic"></a>`;
  } else if (license === "GNU GPLv3") {
    return `<a href="https://img.shields.io/badge/License-GNUGPLv3-yellowgreen?style=plastic"><img alt="GNU GPLv3 License used" src="https://img.shields.io/badge/License-GNU GPLv3-yellowgreen?style=plastic"></a>`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ``;
  } else if (license === "Apache 2.0") {
    return `http://www.apache.org/licenses/LICENSE-2.0`;
  } else if (license === "MIT") {
    return `https://choosealicense.com/licenses/mit/`;
  } else if (license === "Mozilla 2.0") {
    return `https://choosealicense.com/licenses/mpl-2.0/`;
  } else if (license === "GNU AGPLv3") {
    return `https://choosealicense.com/licenses/agpl-3.0/`;
  } else if (license === "GNU GPLv3") {
    return `https://choosealicense.com/licenses/gpl-3.0/`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  if (license === "None") {
    return ``;
  } else {
    return `##License
    Copyright (c) 2021 ${name}.
    This project is licensed under [${license}](${renderLicenseLink(license)}) `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let response;
  return `# ${response.title}

  #${response.title}

  #Table of Content
  -[Description] (#description)

  -[Installation] (#installation)
  
  -[Contribution] (#contribution)
  
  -[Test] (#test)
  
  -[Usage] (#usage)
  
  -[Username] (#username)
  
  -[License) (#license)
 
    ## Description
  ${data.description}

    ##Instillation
    ${data.instillation}

    ##Contribution
    ${data.contribution}

    ##Test
    ${data.test}

    ##Usage
    ${data.usage}

    ##Username
    ${data.username}

    ## License
    ${data.license}
`;
}

module.exports = generateMarkdown;
