const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  it("Constructor should assign values to object", () => {
    const manager = new Manager("Dave", "3", "dave@xyz.com", "5555555555");

    expect(manager.name).toBe("Dave");
    expect(manager.id).toBe("3");
    expect(manager.email).toBe("dave@xyz.com");
    expect(manager.officeNumber).toBe("5555555555");
  });
  it("getRole should return manager", () => {
    const manager = new Manager("Dave", "3", "dave@xyz.com", "5555555555");

    expect(manager.getRole()).toBe("Manager");
  });
});
