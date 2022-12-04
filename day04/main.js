function overlapsCalc(input) {
    let overlaps = 0;
    let partialOverlaps = 0;
    for(var i = 0; i < input.length ; i++) {
        var rowI = input[i].split(',');
        var pairA = rowI[0].split('-');
        var pairB = rowI[1].split('-');
        const [a0, a1, b0, b1] = [+pairA[0], +pairA[1], +pairB[0], +pairB[1]];

        if (((a0 <= b0) && (a1 >= b1)) || ((a0 >= b0) && (a1 <= b1))) overlaps++;
        if (a1 >= b0 && b1 >= a0) partialOverlaps++;
    }

    return {overlaps: overlaps, partialOverlaps:partialOverlaps};
}



module.exports = {
    overlapsCalc: overlapsCalc
};