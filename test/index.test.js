const { capitalizeWords, filterActiveUsers, logAction } = require("../index");

describe("capitalizeWords", () => {
  test("should capitalize the first letter of each word", () => {
    const input = "hello world";
    const expected = "Hello World";
    expect(capitalizeWords(input)).toBe(expected);
  });
});

describe("filterActiveUsers", () => {
  test("should filter and return only active users", () => {
    const name = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false },
    ];

    expect(filterActiveUsers(name)).toEqual([name[0]]);
  });
});

describe("logAction", () => {
  test("should log the action with username and timestamp", () => {
    const action = "login";
    const username = "Alice";
    expect(logAction(action, username)).toMatch(
      new RegExp(`User ${username} performed ${action} at .*`)
    );
  });
});
