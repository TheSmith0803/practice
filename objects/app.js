//values within an object are mutable

const object = { counter: 0 };

function changeObjValue(count) {
    count.counter += 1;
} 

changeObjValue(object);

console.log(object.counter); //output: 1

//primitive datatypes (regular old variables) are
//immutable, so they need to be redefined...

let primitive = 0;

function changePrimValue(value) {
    value += 1;
}

changePrimValue(primitive);

console.log(primitive); //will still output 0

//however, we can still use that data as a reference to get a modified variable...
// (only if we use a return statment)

function changePrimValue2(value) {
    value += 1;
    return value;
}

//so here we are reassigning the value to the return of the function...
primitive = changePrimValue2(primitive);

console.log(primitive); //will now output 1 :)
