const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is some text added in by Javascript!";

//some styles
content.style["color"] = "red";

container.appendChild(content);
