//targeting nodes with selectors

// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");

const something = document.createElement("div");
// selects the first child of #container => .display
let display = container.firstElementChild;
console.log(display);  // <div class="display"></div>

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
display = controls.previousElementSibling;
console.log(display); // <div class="display"></div>

/** When your HTML code is parsed by a web browser, it is converted to the DOM.
 */

//query selectors

let element = element.querySelector(selector);
//returns a reference to the first match of *selector*

element = element.querySelectorAll(selectors);
//returns a "NodeList" containing references to all of the matches of the selectors

//A NodeList is NOT, an array. You can convert it into an array with ->
Array.from(whatever_array);
//but unless you do that you wont be able to index it like a normal array
//i.e., nodelist[3];

//element creation

let div = document.createElement("div");

//This function does NOT put your new element into the DOM - it creates it in MEMORY.
//This is so you can manip the element before placing it on the page (styles, ids, classes, ect...)

//You can place the element into the DOM with one of the following methods:

parentNode.appendChild(childNode); 
//appends childNode as the last child of parentNode

parentNode.insertBefore(newNode, referenceNode);
//inserts newNode into parentNode before referenceNode

//You can also remove specific elements as well
parentNode.removeChild(child);
//removes child from parentNode on the DOM and returns a reference to child.

//I beleive it would also make sense to do this:
parentNode.removeChild(document.getElementById("#someID"));

//ALTERING ELEMENTS

// creates a new div referenced in the variable 'div'
/*let*/div = document.createElement("div");

// adds the indicated style rule to the element in the div variable
div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue; background: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white;");


/**When accessing a kebab-cased CSS property like background-color with JS, 
 * you will need to either use camelCase with dot notation or bracket notation. 
 * When using bracket notation, you can use either camelCase or kebab-case, 
 * but the property name must be a string. */

// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: div.style.background - color
div.style.background-color;

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];


//YOU CAN ALSO EDIT ATTRIBUTES OF DEFINED DIVS
// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");

//YOU CAN ALSO DO THE SAME THING WITH CLASSES
// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");


//YOU CAN ADD TEXT TO AN HTML ITEM

//preferred method
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";

//alternate method
// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";

//textContent is preferred over innerHTML for adding text, 
// as innerHTML should be used sparingly to avoid potential 
// security risks. To understand the dangers of using innerHTML

//IMPORTANT NOTES HERE

/** Your JavaScript, for the most part, is run whenever the JS file is run or 
 * when the script tag is encountered in the HTML. If you are including your 
 * JavaScript at the top of your file, many of these DOM manipulation methods 
 * will not work because the JS code is being run before the nodes are created 
 * in the DOM. The simplest way to fix this is to include your JavaScript at the 
 * bottom of your HTML file so that it gets run after the DOM nodes are parsed and 
 * created.
 *
 * Alternatively, you can link the JavaScript file in the <head> of your HTML document.
 * Use the <script> tag with the src attribute containing the path to the JS file, 
 * and include the defer keyword to load the file after the HTML is parsed, as such:*/

<head>
  <script src="js-file.js" defer></script>
</head>

//Defer seems very useful

//REMEMBER THOUGH! -- The defer attribute is only for external scripts
//If the script tag has no src, the defere attribute is ignored.

//CONTINUE ON WITH EVENTS 
