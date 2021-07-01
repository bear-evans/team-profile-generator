const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(myName, myID, myEmail, myGithub) {
    super(myName, myID, myEmail);
    this.github = myGithub;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
