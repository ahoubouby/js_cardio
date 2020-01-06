const { isAnagram } = require("../main");
const [str1, str2] = ["elbow", "below"];
const [cStr1, cStr2] = ["Dormitory", "dirty room###"];

describe("test is Angram function", () => {
  it("without any space or special caractere", () => {
    expect(isAnagram(str1, str2)).toBe(true);
  });
  it("with special caractere", () => {
    expect(isAnagram(cStr1, cStr2)).toBeTruthy();
  });
});
