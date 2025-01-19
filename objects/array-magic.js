function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }

let array = [1,2,3,4,5,6,7,8,9];

let result = sumOfTripledEvens(array);

console.log(result);


//Now we move on to the map method!!!

function addOne(num) {
    return num + 1;
}
//the map method has to take a function as an argument...
const arr = [1,2,3,4,5];
const mappedArr = arr.map(addOne);
console.log("This is the mapped array: " + mappedArr);//outputs [2,3,4,5,6]

//you can define an inline function right inside the map method like so

const mappedArr2 = arr.map((num) => num + 1);
console.log(mappedArr); //still outputs [2,3,4,5,6]

//THE FILTER METHOD

function isOdd(num) {
    return num % 2 !== 0;
}
const arr2 = [1,2,3,4,5,6,7,8,9];
const oddNums = arr2.filter(isOdd);
console.log(oddNums);
//same deal here you could define an inline function as the argument for the filter method

console.log("\n\n\nReduce Method Stuff:\n\n");

//THE REDUCE METHOD 

const arr3 = [1,2,3,4,5];

const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums);
console.log(arr3);

const anotherArr = [1,3,5,7,9,11];

const totalSum = anotherArr.reduce((fart, currentItem) => {
  return fart + currentItem;
}, 1);

let total = 0;

console.log(totalSum);
for(let i = 0; i < anotherArr.length; i++) {
  total = total + anotherArr[i];
  console.log(total);
}

