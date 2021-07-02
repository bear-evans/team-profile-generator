// ================================
// Requirements and Imports
// ================================
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const messages = require("./src/messages");
const generateIndex = require("./src/generateIndex");

// ================================
// Inquirer Questions
// ================================

const managerPrompts = [
  {
    name: "name",
    type: "input",
    message: "What is the team manager's name? ",
  },
  {
    name: "id",
    type: "input",
    message: "Manager's Employee ID number: ",
  },
  {
    name: "office",
    type: "input",
    message: "Manager's office number: ",
  },
  {
    name: "email",
    type: "input",
    message: "Manager's email address: ",
  },
];

const internPrompts = [
  {
    name: "name",
    type: "input",
    message: "What is the intern's name? ",
  },
  {
    name: "id",
    type: "input",
    message: "Intern's Employee ID number: ",
  },
  {
    name: "school",
    type: "input",
    message: "Intern's School: ",
  },
  {
    name: "email",
    type: "input",
    message: "Intern's email address: ",
  },
];

const engineerPrompts = [
  {
    name: "name",
    type: "input",
    message: "What is the engineer's name? ",
  },
  {
    name: "id",
    type: "input",
    message: "Engineer's Employee ID number: ",
  },
  {
    name: "github",
    type: "input",
    message: "Engineer's Github username: ",
  },
  {
    name: "email",
    type: "input",
    message: "Engineer's email address: ",
  },
];

const genPrompt = [
  {
    name: "option",
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Add an Intern", "Add an Engineer", "No thanks, I'm done."],
  },
];

// ================================
// Team Roster Module
// ================================
const teamRoster = (function () {
  let employees = [];

  function init() {
    console.log(messages.greeting);
    createManager();
  }

  function queryUser() {
    inquirer.prompt(genPrompt).then((answer) => {
      switch (answer.option) {
        case "Add an Intern":
          createIntern();
          break;
        case "Add an Engineer":
          createEngineer();
          break;
        case "No thanks, I'm done.":
          writeFile(employees);
      }
    });
  }

  // Creates a manager object from prompts
  function createManager() {
    inquirer.prompt(managerPrompts).then((data) => {
      employees[employees.length] = new Manager(
        data.name,
        data.id,
        data.email,
        data.office
      );

      queryUser();
    });
  }

  // Creates an intern object from prompts
  function createIntern() {
    inquirer.prompt(internPrompts).then((data) => {
      employees[employees.length] = new Intern(
        data.name,
        data.id,
        data.email,
        data.school
      );
      queryUser();
    });
  }

  // You guessed it; it creates an engineer object from prompts
  function createEngineer() {
    inquirer.prompt(engineerPrompts).then((data) => {
      employees[employees.length] = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );

      queryUser();
    });
  }

  // Assembles the output file and writes it to disk
  function writeFile(data) {
    let textContents = generateIndex(data);

    fs.writeFile("./dist/index.html", textContents, (err) => {
      err ? console.log(err) : console.log(messages.saved);
    });
  }

  return {
    init: init,
  };
})();

teamRoster.init();
