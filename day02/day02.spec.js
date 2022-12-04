var expect    = require("chai").expect;
var fs = require("fs");
var main = require("./main");

describe("Day 02 - Rock Paper Scissors ", function() {
  
  it("test totalScore - input0", function() {
    const file = fs.readFileSync("./day02/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.totalScore1(inputArray);
    expect(result).to.equal(15);
  });

  it("test totalScore - input", function() {
    const file = fs.readFileSync("./day02/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.totalScore1(inputArray);
    expect(result).to.equal(9241);
  });

  it("test totalScore2 - input0", function() {
    const file = fs.readFileSync("./day02/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.totalScore2(inputArray);
    expect(result).to.equal(12);
  });

  it("test totalScore2 - input", function() {
    const file = fs.readFileSync("./day02/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.totalScore2(inputArray);
    expect(result).to.equal(14610);
  });
});