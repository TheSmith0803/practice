const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
    }
};

console.log(person);

person.bio();

let person2 = person;

person2.name = ["Billy", "Bob"];

console.log(person.name + "\n" + person2.name);

person.farewell = function () {
    console.log("Bye");
}

person.farewell();



const myDataName = "height";
const myDataValue = "1.75m"
person[myDataName] = myDataValue;

console.log(person.height);

console.log(person);



const other = {
    name: "Chris",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};

const other2 = {
    name: "Deepti",
    introduceSelf() {
        console.log
    }
}

other.introduceSelf();

//CONSTRUCTORS??

//this way we can return an ojbect directly from a function
//but it is a little bit more verbose

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function() {
        console.log(`Hi! I'm ${this.name}`);
    };
    return obj;
}

let me = "Ethan"

const itsame = createPerson(me);

itsame.introduceSelf();

const frankie = createPerson("Frankie");
frankie.introduceSelf();

//using a constructor we can be a little more concise
//constructors start with a capital letter by convention

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}`);
    };
}

//spaces because
console.log("\n\n\n");

//and then to call Person() as a constructor, we use the new keyword
const salva = new Person("Salva");
salva.introduceSelf();

const fred = new Person("Fred");
fred.introduceSelf();


