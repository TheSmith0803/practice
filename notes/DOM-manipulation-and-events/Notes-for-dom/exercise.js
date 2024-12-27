// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


//a <p> with red text that says “Hey I’m red!”

const paragraph = document.createElement("p");
paragraph.setAttribute("id", "paragraph");
paragraph.innerText = "Hey I'm red!";
paragraph.style["color"] = "red";

//an <h3> with blue text that says “I’m a blue h3!”

const heading = document.createElement("h3");
heading.setAttribute("id", "second-title");
heading.innerText = "I'm a blue h3!";
heading.style["color"] = "blue";

//adding these two divs to the page

container.appendChild(paragraph);
container.appendChild(heading);

//a <div> with a black border and pink background color with the following 
//elements inside of it: 
// 1: another <h1> that says “I’m in a div”
// 2: a <p> that says “ME TOO!”
// 3: Hint for this one: after creating the <div> with createElement, 
// append the <h1> and <p> to it before adding it to the container.

const pink_box = document.createElement("div");

pink_box.setAttribute("style", "border: 1px solid black;" + //just wanted to see if this would work
    "background-color: pink;"
)

let pb_header = document.createElement("h1");
pb_header.innerText = "I'm in a div"
let pb_para = document.createElement("p");
pb_para.innerText = "ME TOO!";

pink_box.appendChild(pb_header);
pink_box.appendChild(pb_para);

container.appendChild(pink_box);
