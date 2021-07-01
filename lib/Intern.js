const Employee = require("./Employee");

class Intern extends Employee {
  constructor(myName, myID, myEmail, mySchool) {
    super(myName, myID, myEmail);
    this.school = mySchool;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
