/*

let data = 42;
let dataCopy = data;

dataCopy = 43;

console.log("changing contents of a variable");
console.log(data);
console.log(dataCopy);

const obj = { data: 42 };

const objCopy = obj;

objCopy.data = 43;


console.log(obj);
console.log(objCopy);



let user = {        //an object
    name: "John",   //by key "name" store value "John"
    age: 30,         //by key "age" store value 30
}

//console.log(user.name);
//console.log(user.age);

user.isAdmin = true;

//console.log(user.isAdmin);
//console.log(user);

delete user.age;

//console.log(user);

user["likes birds"] = true;

//console.log("John likes birds, this is " + user["likes birds"]);


user = {
    name: "John",   
    age: 30,
}

//let key = prompt("What do you want to know about the user?", "name", "age");

//alert(user[key]);

//COMPUTED PROPERTIES

//let fruit = prompt("Which fruit to buy", "apple");
let bag = {};

//bag[fruit] = 5;

let Awoman = {
    name: "Shelly Banks",
    age: 36,
    actual_age: 43.
};

fruit = 'apple';
bag = {
    [fruit + 'Computers']: 5
};

//console.log(bag.appleComputers);

function makeUser(name, age) {
    return {
        name,
        age,
    };
}

user = makeUser("Billy", 12);

let name = "John";
let user2 = {
    name,
    age: 30,
};



//console.log(user2.name);
//console.log(user2);


let user = {
    name: "John",
    surname: "Smith",
}

console.log(user.name);

user.name = "Pete";

console.log(user.name);

delete user.name;

console.log(user.name);


let getCars = (car1, car2, car3) => {
    return {
        car1,
        car2,
        car3,
    }
};

let dealer = getCars("Toyota", "Mazda", "Acura");

console.log(dealer);

*/

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
        return`${this.name[0]} ${this.name[1]} is ${this.age} years old`
    },
    introduction: function () {
        return `Hi! I'm ${this.name[0]}.`
    }
}

console.log(person.bio());
console.log(person.introduction());


