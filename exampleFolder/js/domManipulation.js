// Then DOM (Document Object Model)
// is the representation of your web page
// (includind the HTML and CSS) in JavaScript

// This will get us a JS reference to the
// HTML element with the specified ID
// (remember, JS is case-sensitive)
let body = document.getElementById("myBodyElement");

// The dot (.) operator lets us look inside
//whatever is one the left side
// to try to access whatever is on the right

// style hapens to be the property inside
// HTML elements, which stores all of this
// CSS styles and properties

// css properties is JS get their names converted
// ( so 'backgroudn-color' becomes 'backgroundColor')
body.style.backgroundColor = "cyan";

// innerHTML is a property that contains
// all of the child HTML inside that element.
// If we reassign a value to it, we will overide
// any existing HTML with our own HTML
// (Inspect your page to verify this!)
body.innerHTML = "<h1>Hello World!</h1>";

// we can also append HTML to innerHTML
body.innerHTML =
    body.innerHTML +
    "<p id='myParagraph'>This was written with dynamic JS!</p>"

// the += operator is equivalent to the code above
body.innerHTML += "<p>Here's another paragraph</p>";

// We can aslso get JS references to HTML elements
// that we added dynamically
let myParagraph = document.getElementById("myParagraph");
myParagraph.style.color = "blue"
myParagraph.style.fontWeight = "bold"
myParagraph.style.fontSize = "20px";

// we can combine what we learn today to build
// a very simple "light/dark" mode for our page

let isDarkMode = false;
if (isDarkMode) {
    body.style.backgroundColor = "#333333";
    body.style.color = "white";
} else {
    body.style.backgroundColor = "white";
    body.style.color = "#333333"
}