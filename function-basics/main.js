// add 7 to a num

function add7(num) {
    return num + 7;
}

console.log(add7(5));

// multiply 2 nums

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 10));

// capitalize the first letter and lower case everything else

function capitalize(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1).toLowerCase();
}

console.log(capitalize('mY nAmE iS eThAn...'));

// get last letter of string

function lastLetter(word) {
    return word.slice(-1);
}

console.log(lastLetter('I suck at programming'));