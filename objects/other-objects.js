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