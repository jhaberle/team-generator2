const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
        type: "checkbox",
        message: "choose position",
        name: "position",
        choices: [
            "Manager",
            "Developer",
            "Intern"
        ]
    },
    {
        type: "input",
        message: "employee name",
        name: "name",
    },
    {
        type: "input",
        message: "employee email address",
        name: "email",
    },
    {
        type: "input",
        message: "employee githud id",
        name: "github",
    }
]);
}