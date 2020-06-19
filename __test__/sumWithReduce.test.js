const { sumWithReduce } = require("../main");
describe("sum with Reduce", () => {
  it("zero ", () => {
    expect(sumWithReduce([])).toEqual(0);
  });
  it("sum of one element in table", () => {
    const tab = [1];
    const result = sumWithReduce(tab);
    expect(result).toEqual(1);
  });
  it("sum of many elements", () => {
    const tab = [1, 2, 3, 4, 5];
    const result = sumWithReduce(tab);
    expect(result).toEqual(15);
  });
});
