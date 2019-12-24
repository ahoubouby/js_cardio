const { sum } = require("../main");

const tab = [1, 3, 4, 2, 2, 34, -2, 1, 3, 4, 2, 2, 34];
const tabZero = [0];
const emptyTable = [];

describe("testing sum fucntion", () => {
  it("test zero table", () => {
    expect(sum(tabZero)).toBe(0);
  });
  it("test empty table", () => {
    expect(sum(tabZero)).toBe(0);
  });

  it("test against full table 90", () => {
    expect(sum(tab)).toBe(90);
  });
});
