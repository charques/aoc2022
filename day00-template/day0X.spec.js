var expect    = require("chai").expect;
var fs = require("fs");
var main = require("./main");

describe("Day 0X - Title ", function() {
  
  it("test exampleTest - input", function() {
    const file = fs.readFileSync("./day00-template/input.txt", "utf-8");
    const inputArray = file.split("\n").map(Number);
    const result = main.exampleFunction(inputArray);
    expect(result).to.equal(0);
  });
});