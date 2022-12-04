var expect    = require("chai").expect;
var fs = require("fs");
var main = require("./main");

describe("Day 04 - Camp Cleanup ", function() {
  
  it("test overlaps - input0", function() {
    const file = fs.readFileSync("./day04/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.overlapsCalc(inputArray);
    expect(result.overlaps).to.equal(2);
  });

  it("test overlaps - input", function() {
    const file = fs.readFileSync("./day04/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.overlapsCalc(inputArray);
    expect(result.overlaps).to.equal(518);
  });

  it("test partialOverlaps - input0", function() {
    const file = fs.readFileSync("./day04/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.overlapsCalc(inputArray);
    expect(result.partialOverlaps).to.equal(4);
  });

  it("test partialOverlaps - input", function() {
    const file = fs.readFileSync("./day04/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.overlapsCalc(inputArray);
    expect(result.partialOverlaps).to.equal(909);
  });
});