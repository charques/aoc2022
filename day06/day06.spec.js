var expect    = require("chai").expect;
var fs = require("fs");
var main = require("./main");

describe("Day 06 - Tuning Trouble ", function() {
  
  it("test findStart - input 00", function() {
    const file = fs.readFileSync("./day06/input00.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 4);
    expect(result).to.equal(7);
  });

  it("test findStart - input 01", function() {
    const file = fs.readFileSync("./day06/input01.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 4);
    expect(result).to.equal(5);
  });

  it("test findStart - input 02", function() {
    const file = fs.readFileSync("./day06/input02.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 4);
    expect(result).to.equal(6);
  });

  it("test findStart - input 03", function() {
    const file = fs.readFileSync("./day06/input03.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 4);
    expect(result).to.equal(10);
  });

  it("test findStart - input 04", function() {
    const file = fs.readFileSync("./day06/input04.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 4);
    expect(result).to.equal(11);
  });

  it("test findStart - input 1", function() {
    const file = fs.readFileSync("./day06/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 4);
    expect(result).to.equal(1080);
  });

  it("test findMessage - input 00", function() {
    const file = fs.readFileSync("./day06/input00.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 14);
    expect(result).to.equal(19);
  });

  it("test findMessage - input 01", function() {
    const file = fs.readFileSync("./day06/input01.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 14);
    expect(result).to.equal(23);
  });

  it("test findMessage - input 02", function() {
    const file = fs.readFileSync("./day06/input02.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 14);
    expect(result).to.equal(23);
  });

  it("test findMessage - input 03", function() {
    const file = fs.readFileSync("./day06/input03.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 14);
    expect(result).to.equal(29);
  });

  it("test findMessage - input 04", function() {
    const file = fs.readFileSync("./day06/input04.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 14);
    expect(result).to.equal(26);
  });

  it("test findMessage - input 1", function() {
    const file = fs.readFileSync("./day06/input.txt", "utf-8");
    const inputArray = file.split("\n").map(String);
    var line = inputArray[0];
    const result = main.findNonRepeats(line, 14);
    expect(result).to.equal(3645);
  });
});