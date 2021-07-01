const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  it("Constructor should assign values to object", () => {
    const employee = new Employee("Dave", "3", "dave@xyz.com");

    expect(employee.name).toBe("Dave");
    expect(employee.id).toBe("3");
    expect(employee.email).toBe("dave@xyz.com");
  });
});
