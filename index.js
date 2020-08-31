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
    },
    {
        type: "checkbox",
        message: "add another employee?",
        name: "add",
        choices: [
            "Yes",
            "No",
            ],
            // newEmployee()

        }
 
    ]);
}

function newEmployee() {
    if(choices === "Yes") {
        promptUser();
    } else {
        return;
    }
}


function generateHTML(answers) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">MY TEAM</h1>




      <div class="card" style="width: 18rem;">
      <div class="card-header" id = "name">
      ${answers.name}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Title: ${answers.choices.title}</li>
        <li class="list-group-item">Email: ${answers.email}</li>
        <li class="list-group-item">Github: ${answers.github}</li>
      </ul>
    </div>
      
    </div>
  </div>
  </body>
  </html>`;
  }

  promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("wrote to index");
    newEmployee();
  })
  .catch(function(err) {
    console.log(err);
  });
