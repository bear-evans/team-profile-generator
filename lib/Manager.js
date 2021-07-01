const Employee = require("./Employee");

class Manager extends Employee {
  constructor(myName, myID, myEmail, myNumber) {
    super(myName, myID, myEmail);
    this.officeNumber = myNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
