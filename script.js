const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method

// Using a for loop:
function answerLoop() {
    var array = [];
    for (var i = 0; i < numbers.length; i++){
        const alpha = String.fromCharCode(numbers[i]);
        array.push(alpha);
    }
    document.getElementById('loop').innerHTML += " " + array.join(", ");
}


// Using the forEach method:
function answerForEach() {
    var array = [];
    numbers.forEach(function(item){
        array.push(item)
    const alpha = String.fromCharCode(array);
    array.push(alpha);
    });
    document.getElementById('forEach').innerHTML += " " + array.join(" , ");
}
// Using the map method:
function answerMap(item) {
    var array = [];
    
    
}

// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method

// Answer:

// 3. Display the product of all numbers using reduce
// Answer:


