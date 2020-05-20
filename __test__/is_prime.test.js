const { isPrime } = require("../main");

describe("test is prime function", () => {
  it("test if 1 is prime number", () => {
    expect(isPrime(1)).toBeTruthy();
  });
  it("test if 193 is prime number", () => {
    expect(isPrime(193)).toBeTruthy();
  });
  it("test if 4 not a prime numnber", () => {
    expect(isPrime(4)).toBeFalsy();
  });
});
