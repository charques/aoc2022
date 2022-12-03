function sumPriorities (input) {
    var sum = 0;
    for(var i = 0; i < input.length ; i++) {
        var a = input[i].substring(0, input[i].length/2).split('');
        var b = input[i].substring(input[i].length/2, input[i].length).split('');
        var j = a.length + 1;
        var found = [];
        while (j--) {
            if ((b.indexOf(a[j]) >= 0) && (found.indexOf(a[j]) < 0)) {
                //console.log(a[j]);
                var hit = a[j];
                found.push(hit);
                if(isLowerCase(hit)) {
                    //console.log(hit.charCodeAt(0) - 96);
                    sum += (hit.charCodeAt(0) - 96)
                }
                else {
                    //console.log(hit.charCodeAt(0) - 38);
                    sum += (hit.charCodeAt(0) - 38)
                }
            }
        }
    }
    return sum;
}

function sumPriorities3 (input) {
    var sum = 0;
    for (var i = 0; i < input.length ; i = i + 3) {
        var a = input[i].split('');
        var b = input[i+1].split('');
        var c = input[i+2].split('');

        var j = a.length + 1;
        var found = [];
        while (j--) {
            if ((b.indexOf(a[j]) >= 0) && (c.indexOf(a[j]) >= 0) && (found.indexOf(a[j]) < 0)) {
                //console.log(a[j]);
                var hit = a[j];
                found.push(hit);
                if(isLowerCase(hit)) {
                    //console.log(hit.charCodeAt(0) - 96);
                    sum += (hit.charCodeAt(0) - 96)
                }
                else {
                    //console.log(hit.charCodeAt(0) - 38);
                    sum += (hit.charCodeAt(0) - 38)
                }
            }
        }
    }
    return sum;
}

function isLowerCase (input) {  
    return input === String(input).toLowerCase()
  }

module.exports = {
    sumPriorities: sumPriorities,
    sumPriorities3: sumPriorities3
};