let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let dataTypes = [];

for (let i = 0; i < mix.length; i++) {
    dataTypes.push(typeof mix[i]);   
}

console.log(dataTypes);