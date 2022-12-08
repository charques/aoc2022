function prepareGrid(input) {
    var grid = [];
    for(var i = 0; i < input.length ; i++) {
        var row = input[i].split('').map(function(item) {
            return parseInt(item, 10);
        });
        grid.push(row);
    }
    return grid;
}

function treesVisible (input) {
    //prepare
    var grid = prepareGrid(input);

    // check
    var sum = 0;
    for(var row = 0; row < grid.length ; row++) {
        for(var col = 0; col < grid[row].length ; col++) {
            if( row == 0 || col == 0 || 
                row == grid.length-1 || 
                col == grid[row].length-1 || 
                visibleUp(grid, row, col) || 
                visibleRight(grid, row, col) ||
                visibleDown(grid, row, col) || 
                visibleLeft(grid, row, col)) {
                
                sum++
            }
        }
    }
    return sum;
}

function scenicScore (input) {
    //prepare
    var grid = prepareGrid(input);

    // check
    var max = 0;
    for(var row = 0; row < grid.length ; row++) {
        for(var col = 0; col < grid[row].length ; col++) {
            var sUp = scoreUp(grid, row, col);
            var sRight = scoreRight(grid, row, col);
            var sDown = scoreDown(grid, row, col);
            var sLeft = scoreLeft(grid, row, col);
            var vv = sUp * sRight * sDown * sLeft;
            if(vv > max)
                max = vv;
        }
    }
    return max;
}

function scoreUp(grid, row, col) {
    var value = grid[row][col];
    var count = 0;
    for(var i = row - 1; i >= 0; i--) {
        count++;
        if(grid[i][col] >= value) break;
        
    }
    return count;
}

function scoreRight(grid, row, col) {
    var value = grid[row][col];
    var count = 0;
    for(var i = col + 1; i < grid[row].length; i++) {
        count++;
        if(grid[row][i] >= value) break;
    }
    return count;
}

function scoreDown(grid, row, col) {
    var value = grid[row][col];
    var count = 0;
    for(var i = row + 1; i < grid.length; i++) {
        count++;
        if(grid[i][col] >= value) break;
    }
    return count;
}

function scoreLeft(grid, row, col) {
    var value = grid[row][col];
    var count = 0;
    for(var i = col - 1; i >= 0; i--) {
        count++;
        if(grid[row][i] >= value) break;
    }
    return count;
}

function visibleUp(grid, row, col) {
    var value = grid[row][col];
    for(var i = row - 1; i >= 0; i--) {
        if(grid[i][col] >= value) return false;
    }
    return true;
}

function visibleRight(grid, row, col) {
    var value = grid[row][col];
    for(var i = col + 1; i < grid[row].length; i++) {
        if(grid[row][i] >= value) return false;
    }
    return true;
}

function visibleDown(grid, row, col) {
    var value = grid[row][col];
    for(var i = row + 1; i < grid.length; i++) {
        if(grid[i][col] >= value) return false;
    }
    return true;
}

function visibleLeft(grid, row, col) {
    var value = grid[row][col];
    for(var i = col - 1; i >= 0; i--) {
        if(grid[row][i] >= value) return false;
    }
    return true;
}

module.exports = {
    treesVisible: treesVisible,
    scenicScore: scenicScore
};