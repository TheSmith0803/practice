//just messing around with DOM stuff
const container = document.querySelector("#container");

for (let i = 1; i <= 10; i++) {
    //create 10 divs each with their own name
    let div = document.createElement("div");
    container.appendChild(div);
    div.setAttribute("class", `item${i}`)
}

