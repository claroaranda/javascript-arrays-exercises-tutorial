let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
let letter = ''; //'a';
let letters = /[a-z]/;
//console.log(letters.test(letter));
//console.log(letters.search(letter));
//console.log(letters.includes(letter));

for (let i = 0; i < par.length; i++) {
    letter = par[i].toLowerCase();

    if (letters.test(letter)) { //letter != ' '
        if (counts.hasOwnProperty(letter)) { //`${letter}`
            counts[letter] += 1;
        } else {
            counts[letter] = 1;
        }
    }
}

console.log(counts);
