//body
const body = document.querySelector("body");


//method 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello Mom!");

//method 3
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
    alert("Greetings, Mother!");
});

//All of these methods can also be user inside functions

//Method 1

function alertFunction() {
    alert("Nice");
}

const btn3 = document.querySelector("#btn3");

btn3.onclick = alertFunction;

function nopeAlert() {
    alert("You shall not pass!");
}

const btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", nopeAlert);

const last1 = document.querySelector("#more-button");

/**In this event lister, you use e as a parameter, and this contains an object that 
 * references the event itself. Within this object that you now have access to
 * many useful properties and methods (functions that live inside an object) 
 * such as which mouse button or key was pressed (THIS IS SICK!) or informationa bout 
 * the event's target - the DOM node that was clicked. */
last1.addEventListener("click", (e) => {
    console.log(e);
    let div = document.createElement("div");
    body.appendChild(div);
    div.innerText = "Hello World!";
});

last1.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.innerText = "You clicked me!";
});

last1.addEventListener("click", (e) => {
    e.target.style.cssText = "width: 250px; height: 250px; border-radius: 15px; border: none;";
    e.target.style["background-color"] = "blue";
    e.target.style["font-size"] = "25px";
    e.target.style.color = "white";
});



