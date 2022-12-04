var expect    = require("chai").expect;
var fs = require("fs");
var main = require("./main");

describe("Day 03 - Rucksack Reorganization ", function() {
  
  it("test sumPriorities - input0", function() {
    const file = fs.readFileSync("./day03/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.sumPriorities(inputArray);
    expect(result).to.equal(157);
  });

  it("test sumPriorities - input", function() {
    const file = fs.readFileSync("./day03/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.sumPriorities(inputArray);
    expect(result).to.equal(7811);
  });

  it("test sumPriorities3 - input0", function() {
    const file = fs.readFileSync("./day03/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.sumPriorities3(inputArray);
    expect(result).to.equal(70);
  });

  it("test sumPriorities3 - input", function() {
    const file = fs.readFileSync("./day03/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.sumPriorities3(inputArray);
    expect(result).to.equal(2639);
  });
});