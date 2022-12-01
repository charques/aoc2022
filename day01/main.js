function mostCalories (report) {
    var dataProcessed = calcCaloriesArray(report);
    return Math.max(...dataProcessed);
}

function mostCalories3 (report) {
    var dataProcessed = calcCaloriesArray(report);
    dataProcessed.sort(function(a, b) {
        return b - a;
    });
    const slicedArray = dataProcessed.slice(0, 3);
    const sum = slicedArray.reduce((partialSum, a) => partialSum + a, 0); // with initial value to avoid when the array is empty

    return sum;
}

function calcCaloriesArray(input) {
    var caloriesArray = [];
    var sum = 0;
    for(var i = 0; i < input.length ; i++) {
        if(input[i] == 0) {
            caloriesArray.push(sum)
            sum = 0;
        }
        else {
            sum += input[i];
        }
     }
     return caloriesArray;
}

module.exports = {
    mostCalories: mostCalories,
    mostCalories3: mostCalories3,
};