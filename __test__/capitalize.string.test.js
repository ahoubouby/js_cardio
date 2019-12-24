const { capitalizeString, capitalizeAWord } = require("../main");
const my_name = "abdelwahed";

describe("test capitalize string v1", () => {
  it("empty string", () => {
    expect(capitalizeString([...""])).toEqual("");
  });
  it("capitalize my name", () => {
    expect(capitalizeString([...my_name])).toEqual("Abdelwahed");
  });
});

describe("test capitalise v1 ", () => {
  it("empty string", () => {
    expect(capitalizeAWord("")).toEqual("");
  });
  it("capitalize my name", () => {
    expect(capitalizeAWord(my_name)).toEqual("Abdelwahed");
  });
});
