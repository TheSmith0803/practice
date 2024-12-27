//defining links
const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";

link.href = "https://developer.mozilla.org";

//Creating and placing new nodes

//select section, make a paragraph element with text inside it
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "Aw yep";

sect.appendChild(para);

//create text node
const text = document.createTextNode(
    " -- the premier source for web dev stuffs.",
);
```
//append text node to created paragraph
const linkPara = document.querySelector("p");
linkPara.appendChild(text);
//Keep in mind...linkPara only refers to the ONE paragraph
//So by appending it to sect, it gets moved up in the DOM under sect

//Moving and removing elements

sect.appendChild(linkPara);

//this removed the paragraph entirely
sect.removeChild(linkPara);

//you can also remove a node based only on a reference to itself like so...
linkPara.remove(); //However this method is not supported in older browsers
//so you most likely will have to do something like this:

linkPara.parentNode.removeChild(linkPara);
```
//putting the para back in 


//Manipulating styles
