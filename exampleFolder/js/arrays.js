let emptyArray = [];

let numberArray = [27, 7, 2, 2929, 45];

let stringArray = ["apple", "oranges", "grapes", "pear"];

let mixedArray = ["cat", 2, 5, "dog", "platypus", 12, [2, 3]];

let groceryList = [
    "bacon",
    "eggs",
    "coffee",
    "chesse",
    "prestomi",
    "fruits and veggies"
];
console.log(groceryList);

let firstGroceryItem = groceryList[0];
console.log(firstGroceryItem);

let thirdGroceryItem = groceryList[4];
console.log(thirdGroceryItem);

let lastGroceryItem = groceryList[5];
console.log(lastGroceryItem);

console.log(groceryList);
groceryList.push("ice cream");
console.log(groceryList);

const pageList = document.getElementById("pageList");
const itemInput = document.getElementById("itemInput");
const itemSubmit = document.getElementById("itemSubmit");

function displayList() {
    pageList.innerHTML = groceryList
    .toString()
    .replaceAll(",", "<br>");
}

displayList();

itemSubmit.addEventListener("click", function(e){
    let newItem = itemInput.value;
    itemInput.value = "";
    groceryList.push(newItem);
    displayList();
});