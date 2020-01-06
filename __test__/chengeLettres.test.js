const { chengeLettres } = require("../main");

const str = "hello therz";
describe("test change z to a and add 1 and uppercase", () => {
  it("test first case", () => {
    expect(chengeLettres(str)).toEqual("Ifmmp UIfsA");
  });
});
