class Employee {
  constructor(myName, myID, myEmail) {
    this.name = myName;
    this.id = myID;
    this.email = myEmail;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
