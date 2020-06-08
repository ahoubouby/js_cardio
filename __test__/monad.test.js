const { Just, identity } = require("../utils/functions");

describe("test different scenarios for monad", () => {
  it("test map function", () => {
    const just = Just(34);
    const mapIdentityLaw = just.map(identity);
    expect(mapIdentityLaw.inspect()).toEqual(just.inspect());
  });
  it("chain maps functions", () => {
    const value = 3232;
    const justMonad = Just(value);
    const mapchaining = justMonad.map(identity).map(identity);
    expect(mapchaining.inspect()).toEqual(justMonad.inspect());
  });
  it("test flatMap function laws", () => {
    const value = 33;
    const justNumber = Just(value);
    const justFlatMap = justNumber.flatMap(identity);
    expect(justFlatMap).toBe(value);
  });
});
