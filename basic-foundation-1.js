/**
 * 1. Get 1 to 255 
 * ----------------
 * Write a function that returns an array with all the numbers from 1 to 255.    
 */
function oneToTwoFiftyFive() {          // creates a function called oneToTwoFiftyFive
    var arr = [];                       // creates a variable arr and sets it to an empty string
    for (var i = 1; i < 256; i++) {     // For loop: creates var i and sets it to 1. If i is less than 256..
        arr.push(i);                        // push value of i to end of arr array
    }
    return arr;                         // return arr, an array of all the numbers from 1 to 255.
}

//uncomment line below to run function
//oneToTwoFiftyFive();

/**
 * 2. Get even 1000 
 * -----------------
 * Write a function that would get the sum of all the even numbers 
 * from 1 to 1000.  You may use a modulus operator for this exercise.
 */

function sumOfEven() {                      // creates a function called sumOfEven
    var sum = 0;                            // creates a variable sum and sets it 0;
    for (var i = 1; i < 1001; i++) {        // For loop: creates a variable i and sets it to one. If i is less than 1001...
        if (i % 2 === 0) {                      // if var i modulus 2 is equal to 0...
            sum += i;                               // add the value of var i to the sum variable
        }
    }
    return sum;                             // return value of sum variable, a sum of all the even numbers from 1 - 1000
}
//uncomment line below to run function
//sumOfEven();

/**
 * 3. Sum odd 5000 
 * ----------------
 * Write a function that returns the sum of all the odd numbers from 1 to 5000.
 */

function sumOfOdd() {                       // creates a function called sumOfOdd
    var sum = 0;                            // creates a variable sum and sets it to 0
    for (var i = 1; i < 5001; i++) {        // For loop: creates a variable i and sets it to 1. If i is less than 5001...
        if (i % 2 != 0) {                       // if var i modulus 2 does NOT equal 0...
            sum += i;                               // add the value of var i to the sum variable
        }
    }
    return sum;                             // return value of sum variable, a sum of all the odd numbers from 1 - 5000
}
//uncomment line below to run function
//sumOfOdd();

/**
 * 4. Iterate an array 
 * --------------------
 * Write a function that returns the sum of all the values within an array.
 */

 function sumOfArrayValues(arr) {                       // creates a function called sumOfArrayValues that has a parameter of arr
    var sum = 0;                                        // creates a variable sum and sets it to 0
    for (var i = 0; i < arr.length - 1; i++) {          // For loop: creates a variable i and sets it to 1. If i is less than 5001...
        sum += arr[i];                                           // add the value of arr at index of i to the sum variable
    }
    return sum;                             // return value of sum variable, a sum of all the numbers in given array.
}

var testArr1 = [-5,2,5,12];                 //you can test it with this

//uncomment line below to run function
//sumOfArrayValues(testArr1);                 //call function and pass in the test array as an argument