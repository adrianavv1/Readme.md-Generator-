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
  } else if (license === "")
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description
  ${response.description}

  ## License
  ${response.license}
`;
}

module.exports = generateMarkdown;
