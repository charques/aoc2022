var expect    = require("chai").expect;
var fs = require("fs");
var main = require("./main");

describe("Day 07 - No Space Left On Device ", function() {
  
  it("test directorySize - input0", function() {
    const file = fs.readFileSync("./day07/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.directorySize(inputArray);
    expect(result.sum).to.equal(95437);
  });

  it("test directorySize - input", function() {
    const file = fs.readFileSync("./day07/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.directorySize(inputArray);
    expect(result.sum).to.equal(1989474);
  });

  it("test directorySize - input0", function() {
    const file = fs.readFileSync("./day07/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.directorySize(inputArray);
    expect(result.closestSize).to.equal(24933642);
  });

  it("test directorySize - input", function() {
    const file = fs.readFileSync("./day07/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.directorySize(inputArray);
    expect(result.closestSize).to.equal(1111607);
  });
});