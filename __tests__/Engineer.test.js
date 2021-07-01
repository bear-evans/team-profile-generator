const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  it("Constructor should assign values to object", () => {
    const engineer = new Engineer("Dave", "3", "dave@xyz.com", "davegit");

    expect(engineer.name).toBe("Dave");
    expect(engineer.id).toBe("3");
    expect(engineer.email).toBe("dave@xyz.com");
    expect(engineer.github).toBe("davegit");
  });
});
