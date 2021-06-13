/**
 * 1. Get 1 to 255 
 * Write a function that returns an array with all the numbers from 1 to 255.    
 */
function createArray() {
    var arr = [];
    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}

/**
 * 2. Get even 1000 
 * Write a function that would get the sum of all the even numbers 
 * from 1 to 1000.  You may use a modulus operator for this exercise.
 */

function sumOfEven() {
    var sum = 0;
    for (var i = 1; i < 1001; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}