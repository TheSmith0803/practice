let stuff = document.querySelector('.stuff-child');
let stuff_text = "stuff";
let thing = "did a thing!";

function dostuff() {
    
    if (!stuff){
        return;
    }

    if (stuff.innerHTML == stuff_text) {
        stuff.innerHTML = thing;
    } else if (stuff.innerHTML == thing) {
        stuff.innerHTML = stuff_text;
    }

}

// function expression

let sum = function(a, b) {
    return a + b;
};

console.log(sum(4, 12));

// and this is a function declaration 

function sumOf2(a, b) {
    return a + b;
}

console.log(sumOf2(42, 77));

// and this would be the way to use an arrow function

let arrowSum = (a, b) => a + b;

console.log(arrowSum(34, 22,));
