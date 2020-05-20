const { factorial } = require("../main");

describe("test of factorial function", () => {
  it("test factorial of zero return 1 ", () => {
    expect(factorial(0)).toEqual(1);
  });
  it("factorial of 4 = 24", () => {
    expect(factorial(4)).toEqual(24);
  });
});
