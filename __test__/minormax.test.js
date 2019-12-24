const { minOrMax } = require("../main");
const arr = [3, -1, 1, 23, 3];

describe("testing minOrMax function", () => {
    it("default predicateFun max of array", () => {
        expect(minOrMax(arr)).toBe(23);
    });
  it('min or max of empty table', () => {
      expect(minOrMax([])).toBe(0);
  })
});
