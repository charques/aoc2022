var sol1 = [];
sol1['A X'] = 3 + 1;
sol1['A Y'] = 6 + 2;
sol1['A Z'] = 0 + 3;
sol1['B X'] = 0 + 1;
sol1['B Y'] = 3 + 2;
sol1['B Z'] = 6 + 3;
sol1['C X'] = 6 + 1;
sol1['C Y'] = 0 + 2;
sol1['C Z'] = 3 + 3;

var sol2 = [];
sol2['A X'] = 3 + 0; // loss
sol2['A Y'] = 1 + 3; // draw
sol2['A Z'] = 2 + 6; // win
sol2['B X'] = 1 + 0; // loss
sol2['B Y'] = 2 + 3; // draw
sol2['B Z'] = 3 + 6; // win
sol2['C X'] = 2 + 0; // loss
sol2['C Y'] = 3 + 3; // draw
sol2['C Z'] = 1 + 6; // win

function calc (input, sol) {
    var sum = 0;
    for(var i = 0; i < input.length ; i++) {
        sum += sol[input[i]];
    }
    return sum;
}

function totalScore1 (input) {
    return calc(input, sol1);
}

function totalScore2 (input) {
    return calc(input, sol2);
}

module.exports = {
    totalScore1: totalScore1,
    totalScore2: totalScore2
};