var expect    = require("chai").expect;
var fs = require("fs");
var main = require("./main");

describe("Day 01 - Calorie Counting ", function() {

  it("test mostCalories - demo input", function() {
    const file = fs.readFileSync("./day01/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(Number);
    const result = main.mostCalories(inputArray);
    expect(result).to.equal(24000);
  });
  
  it("test exampleTest - input", function() {
    const file = fs.readFileSync("./day01/input.txt", "utf-8");
    const inputArray = file.split("\n").map(Number);
    const result = main.mostCalories(inputArray);
    expect(result).to.equal(71502);
  });

  it("test mostCalories3 - demo input", function() {
    const file = fs.readFileSync("./day01/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(Number);
    const result = main.mostCalories3(inputArray);
    expect(result).to.equal(45000);
  });

  it("test mostCalories3 - demo", function() {
    const file = fs.readFileSync("./day01/input.txt", "utf-8");
    const inputArray = file.split("\n").map(Number);
    const result = main.mostCalories3(inputArray);
    expect(result).to.equal(208191);
  });
});