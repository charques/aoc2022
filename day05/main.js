function getCratesDemoObj() {
    let cratesDemo = [];
    cratesDemo[1] = ['Z', 'N'];
    cratesDemo[2] = ['M', 'C', 'D'];
    cratesDemo[3] = ['P'];
    return cratesDemo;
}

function getCratesObj() {
    let crates = [];
    crates[1] = ['P', 'F', 'M', 'Q', 'W', 'G', 'R', 'T'];
    crates[2] = ['H', 'F', 'R'];
    crates[3] = ['P', 'Z', 'R', 'V', 'G', 'H', 'S', 'D'];
    crates[4] = ['Q', 'H', 'P', 'B', 'F', 'W', 'G'];
    crates[5] = ['P', 'S', 'M', 'J', 'H'];
    crates[6] = ['M', 'Z', 'T', 'H', 'S', 'R', 'P', 'L'];
    crates[7] = ['P', 'T', 'H', 'N', 'M', 'L'];
    crates[8] = ['F', 'D', 'Q', 'R'];
    crates[9] = ['D', 'S', 'C', 'N', 'L', 'P', 'H'];
    return crates;
}

function cratesTopCalcDemo1(input) {
    return cratesTopCrateMover9000(input, getCratesDemoObj())
}

function cratesTopCalcPart1(input) {
    return cratesTopCrateMover9000(input, getCratesObj())
}

function cratesTopCalcDemo2(input) {
    return cratesTopCrateMover9001(input, getCratesDemoObj())
}

function cratesTopCalcPart2(input) {
    return cratesTopCrateMover9001(input, getCratesObj())
}

function cratesTopCrateMover9000(input, crates) {
    for(var i = 0; i < input.length ; i++) {
        var line = input[i].split(' ');
        var items = Number(line[1]);
        var origin = Number(line[3]);
        var destin = Number(line[5]);
        for(var j=0; j < items; j++) {
            var crateItem = crates[origin].pop();
            crates[destin].push(crateItem);
        }
    }
    const initial = '';
    const result = crates.reduce(
        (accumulator, currentValue) => accumulator + currentValue.slice(-1),
        initial
    );
    return result;
}

function cratesTopCrateMover9001(input, crates) {
    for(var i = 0; i < input.length ; i++) {
        var line = input[i].split(' ');
        var items = Number(line[1]);
        var origin = Number(line[3]);
        var destin = Number(line[5]);
        var addArray = [];
        for(var j=0; j < items; j++) {
            var crateItem = crates[origin].pop();
            addArray.unshift(crateItem);
        }
        crates[destin] = crates[destin].concat(addArray);
    }
    const initial = '';
    const result = crates.reduce(
        (accumulator, currentValue) => accumulator + currentValue.slice(-1),
        initial
    );
    return result;
}

module.exports = {
    cratesTopCalcDemo1: cratesTopCalcDemo1,
    cratesTopCalcPart1: cratesTopCalcPart1,
    cratesTopCalcDemo2: cratesTopCalcDemo2,
    cratesTopCalcPart2: cratesTopCalcPart2
};