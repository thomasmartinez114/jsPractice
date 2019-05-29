const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method

// Using a for loop:
function answerLoop() {
    var arrayLoop = [];
    const data = numbers;
    const answerLoop = document.getElementById('loop').innerHTML = data;
}
// Using the forEach method:
function answerForEach() {
    const data = numbers;
    const answerLoop = document.getElementById('forEach').innerHTML = data;
}
// Using the map method:
function answerMap() {
    const data = numbers;
    const answerLoop = document.getElementById('map').innerHTML = data;
}

// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
// Answer:

// 3. Display the product of all numbers using reduce
// Answer:
