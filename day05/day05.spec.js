var expect    = require("chai").expect;
var fs = require("fs");
var main = require("./main");

describe("Day 05 - Supply Stacks ", function() {
  
  it("test cratesTopCalcDemo1 - input0", function() {
    const file = fs.readFileSync("./day05/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.cratesTopCalcDemo1(inputArray);
    expect(result).to.equal('CMZ');
  });

  it("test cratesTopCalcPart1 - input", function() {
    const file = fs.readFileSync("./day05/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.cratesTopCalcPart1(inputArray);
    expect(result).to.equal('TPGVQPFDH');
  });

  it("test cratesTopCalcDemo2 - input0", function() {
    const file = fs.readFileSync("./day05/input0.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.cratesTopCalcDemo2(inputArray);
    expect(result).to.equal('MCD');
  });

  it("test cratesTopCalcPart2 - input", function() {
    const file = fs.readFileSync("./day05/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    const result = main.cratesTopCalcPart2(inputArray);
    expect(result).to.equal('DMRDFRHHH');
  });
});