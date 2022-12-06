function findNonRepeats(line, numberChars) {
    for(var i = 0; i < line.length - numberChars - 1 ; i++) {
        var ll = line.substring(i, numberChars + i);
        if(!hasRepeats(ll)) {
            break;
        }
    }
    return i + numberChars;
}

function hasRepeats (str) {
    return /(.).*\1/.test(str);
}

module.exports = {
    findNonRepeats: findNonRepeats
};