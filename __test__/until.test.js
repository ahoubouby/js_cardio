const { until } = require("../main");

describe("test until function as is introduced in scala ", () => {
  it("until of zero ", () => {
    const tabZero = until(0);
    expect(tabZero.length).toEqual(0);
  });

  it("until of 10", () => {
    const tabTen = until(10);
    expect(tabTen.length).toEqual(10);
  });
  it("until item equals", () => {
    const tmpTabFour = [0, 1, 2, 3];
    const tabFour = until(4);
    expect(tabFour).toEqual(tmpTabFour);
  });
});
