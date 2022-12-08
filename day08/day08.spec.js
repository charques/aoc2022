var expect    = require("chai").expect;
var fs = require("fs");
var main = require("./main");

describe("Day 08 - Treetop Tree House ", function() {
  
  it("test treesVisible - input0", function() {
    const file = fs.readFileSync("./day08/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.treesVisible(inputArray);
    expect(result).to.equal(21);
  });

  it("test treesVisible - input", function() {
    const file = fs.readFileSync("./day08/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.treesVisible(inputArray);
    expect(result).to.equal(1560);
  });

  it("test scenicScore - input0", function() {
    const file = fs.readFileSync("./day08/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.scenicScore(inputArray);
    expect(result).to.equal(8);
  });

  it("test scenicScore - input", function() {
    const file = fs.readFileSync("./day08/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.scenicScore(inputArray);
    expect(result).to.equal(252000);
  });
});