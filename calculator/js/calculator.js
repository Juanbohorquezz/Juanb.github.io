let result = document.getElementById("result");

function displayTwoPlusTwo() {;
    let number1 = 2;
    let number2 = 2;
    result.innerHTML = number1 + number2;
}

function displayThreeTimesFour(){
    result.innerHTML = 3 * 4;
}

function displayTenMinusEight(){
    result.innerHTML = 10 - 8;
}

function displayEightyDivideTwentynine(){
    result.innerHTML = 80 / 29
}

function displayMultiply(){
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value * input2.value;
}

displayMultiply();

function displayDivide(){
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value / input2.value;
}

displayDivide();

function displayMinus(){
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value - input2.value;
}

displayMinus();

function displayAddition(){
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}

displayAddition();

// let myNumber = 54;
// let myStringNumber = myNumber.toString();

// console.log(myNumber);
// console.log(myStringNumber);