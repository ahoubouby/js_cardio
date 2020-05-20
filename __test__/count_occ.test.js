const { countOcc } = require("../main");

const str = "abdelwahedhoubouby";
const correctObjString = {
  a: 2,
  b: 3,
  d: 2,
  e: 2,
  l: 1,
  w: 1,
  h: 2,
  o: 2,
  u: 2,
  y: 1,
};
const tab = [1, 2, 2, 1, 3];
const correctObj = { 1: 2, 2: 2, 3: 1 };
describe("test count occ", () => {
  it("test occurence with str", () => {
    expect(countOcc([...str])).toEqual(correctObjString);
  });

  it("test occurence with str", () => {
    expect(countOcc(tab)).toEqual(correctObj);
  });
});
