// In this we want all numbers to return their number, expect:
// numbers which can divided by 15, 5 or 3, to return "FizzBuzz", "Buzz" and "Fizz"

describe("FizzBuzz", function() {
  it("returns 1 of number is 1", function() {
    expect(FizzBuzz(1)).toEqual(1);
  });

  it("returns Fizz of number is 3", function() {
    expect(FizzBuzz(3)).toEqual("Fizz");
  });

  it("returns Buzz of number is 5", function() {
    expect(FizzBuzz(5)).toEqual("Buzz");
  });

  it("returns FizzBuzz of number is 15", function() {
    expect(FizzBuzz(15)).toEqual("FizzBuzz");
  });
});
