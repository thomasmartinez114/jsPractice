const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method

// Using a for loop:
function answerLoop() {
    var array = [];
    for (var i = 0; i < numbers.length; i++){
        const alpha = String.fromCharCode(numbers[i]);
        array.push(alpha);
    }
    document.getElementById('forLoop').innerHTML += " " + array.join(", ");
}


// Using the forEach method:
function answerForEach() {
    numbers.forEach(e => {
        document.getElementById('forEach').innerHTML += " " + ", " + String.fromCharCode(e)
    })
}

// Using the map method:
function answerMap() {
    let alpha = numbers.map(numbers => {
        document.getElementById('map').innerHTML += ' ' + String.fromCharCode(numbers)
    })
}

// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method

// Answer:
function greaterThan() {
    const filtered = numbers.filter(e => {
        return e > 72 && e < 88
    })
    document.getElementById('numbersLowGreat').innerHTML += ' ' + filtered.join(' ')
}

// 3. Display the product of all numbers using reduce
// Answer:
function reduceProduct() {
    const product = numbers.reduce((acc, cur) => {
        return acc * cur
    })
    document.getElementById('reduced').innerHTML += ' ' + product
}

