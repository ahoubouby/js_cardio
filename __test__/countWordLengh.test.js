const { countWordLengh } = require("../main");

const names = ["abdelawhed", "houbouby", "hassan", "nourddine"];
describe("object by string and length of string", () => {
  it("names", () => {
    expect(countWordLengh(names)).toEqual({
      abdelawhed: 10,
      hassan: 6,
      houbouby: 8,
      nourddine: 9
    });
  });
});
