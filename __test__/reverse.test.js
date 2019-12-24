const { reverse } = require("../main");

const str = "root";
const emptyTable = [];
const tableofNum = [1, 2, 3, 4, 5, 6];

describe("test reverse method", () => {
  it("emptyTable reverse ", () => {
    expect(reverse(emptyTable)).toEqual(emptyTable);
  });
  it("reverse table of number", () => {
    expect(reverse(tableofNum)).toEqual([6, 5, 4, 3, 2, 1]);
  });
  it("reverse string ", () => {
    expect(reverse([...str]).join("")).toEqual("toor");
  });
});
