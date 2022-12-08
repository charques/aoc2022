function directorySize (input) {
    var currentFolders = [];
    var sizesPerFolder = [];
    for(var i = 0; i < input.length ; i++) {
        if (input[i].includes('$ cd ..')) {
            currentFolders.pop();
        }
        else if (input[i].includes('$ cd')) {
            let folder = (input[i].split('$ cd '))[1];
            const temp2 = (currentFolders.length > 0) ? currentFolders[currentFolders.length-1] +  folder + '/' : folder;
            currentFolders.push(temp2);
            if(!sizesPerFolder[temp2]) {
                sizesPerFolder[temp2] = 0;
            }
        }
        else if (input[i].includes('$ ls') || input[i].includes('dir')) {
        }
        else {
            let fileA = input[i].split(' ');
            for(var j = 0; j < currentFolders.length; j++) {
                sizesPerFolder[currentFolders[j]] += Number(fileA[0]);
            }
        }
    }
    var sum = 0;
    for (const folder in sizesPerFolder) { 
        if(sizesPerFolder[folder] <= 100000) 
            sum += sizesPerFolder[folder];
    }

    const sizeToFree = sizesPerFolder['/'] - 70000000 + 30000000;
    let closestSize=70000000;
    for(folder in sizesPerFolder) {
        if(sizesPerFolder[folder] > sizeToFree && sizesPerFolder[folder] < closestSize)
            closestSize = sizesPerFolder[folder];
    }
    return {sum: sum, closestSize: closestSize};
}

module.exports = {
    directorySize: directorySize
};