let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const zerosToYahoos = (arr) => {
    let returnArray = [];

    arr.forEach((item) => {
            // magic goes inside these brackets
            if(item == 1) {
                returnArray.push(item);
            } else if(item == 0) {
                returnArray.push('Yahoo');
            }
    });

    return returnArray;
};

console.log(zerosToYahoos(myArray));
