const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  it("Constructor should assign values to object", () => {
    const intern = new Intern("Dave", "3", "dave@xyz.com", "OSU");

    expect(intern.name).toBe("Dave");
    expect(intern.id).toBe("3");
    expect(intern.email).toBe("dave@xyz.com");
    expect(intern.school).toBe("OSU");
  });
});
