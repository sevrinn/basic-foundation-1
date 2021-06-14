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
    for (var i = 0; i < arr.length - 1; i++) {          // For loop: creates a variable i and sets it to 0. If i is less than the length of arr minus 1...
        sum += arr[i];                                           // add the value of arr at index of i to the sum variable
    }
    return sum;                             // return value of sum variable, a sum of all the numbers in given array.
}

var testArr1 = [-5,2,5,12];                 //you can test it with this

//uncomment line below to run function
//sumOfArrayValues(testArr1);                 //call function and pass in the test array as an argument

/**
 * 5. Find Max 
 * --------------------
 * Given an array with multiple values, write a function that returns the maximum number in the array.
 */

 function findMax(arr) {                       // creates a function called findMax that has a parameter of arr
    var max = 0;                                     // creates a variable max and sets it to 0
    for (var i = 0; i < arr.length; i++) {          // For loop: creates a variable i and sets it to 0. If i is less than the length of arr...
        if ( arr[i] > max) {                                // If value of arr at index i is greater than value of var max
            max = arr[i];                                       // set var max to the value of arr at index i
        }
    }
    return max;                             // return value of max variable, the largest number in the array.
}

var testArr2= [-3,3,5,7];                 //you can test it with this

//uncomment line below to run function
//findMax(testArr2);                 //call function and pass in the test array as an argument

/**
 * 6. Find Average 
 * --------------------
 * Given an array with multiple values, write a function that returns the average of the values in the array.
 */

 function findAvg(arr) {                       // creates a function called findAvg that has a parameter of arr
    var sum = 0;                                       // initializes and sets var max to 0
    var avg = 0;                                       // initializes and sets var min to 0;
    for (var i = 0; i < arr.length; i++) {          // For loop: creates a variable i and sets it to 0. If i is less than the length of arr...
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;                             // return value of avg variable, an avg of numbers in given array.
}

var testArr3= [1,3,5,7,20];                 //you can test it with this

//uncomment line below to run function
//findAvg(testArr3);                 //call function and pass in the test array as an argument

/**
 * 7. Array Odd 
 * --------------------
 * Write a function that would return an array of all the odd numbers between 1 to 50. 
 */

 function arrayOdd() {               // creates a function called arrayOdd 
    var odds = [];                       // initializes and sets var odds to be an empty array
                                          
    for (var i = 1; i <= 50; i++) {          // For loop: creates a variable i and sets it to 0. If i is less than or equal to 50...
        
        if (i % 2 != 0){                    //if the value of arr at index i modulus 2 is not 0...
            odds.push(i);                       //push the value of arr at index i to the odds array
        }
    }
    
    return odds;                     // return value of odds variable, an array of odd numbers from 1 to 50
}



//uncomment line below to run function
//arrayOdd();                   //call function and pass in the test array as an argument

/**
 * 8. Greater Than Y 
 * --------------------
 * Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
 */

function greaterThanY(arr, valueOfY) {                    //creates a function called greaterThanY that takes an arr as a parameter
    var y = valueOfY;                                       //sets valueOfY to 3;
    var greaterThanY = [];                                  //sets greaterThanY to an empty string
    for (var i = 0; i < arr.length; i++) {                  //For loop: creates a variable i and sets it to 0. if i is less than length of arr
        if (arr[i] > y) {                                       //if the value of arr at index i is greater than y...
            greaterThanY.push(arr[i]);                              //push value of arr at index i to end of greaterThanY array
        }
    }
    return greaterThanY;                    //return greaterThanY array
}
var testArr4 = [1, 3, 5, 7];  //test array
//uncomment line below to run function
//greaterThanY(testArr4, 3);   //calls the greaterThanY function, passing in testArr4 and 3 as the argument

/**
 * 9. Squares 
 * --------------------
 * Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. 
 */

function squares(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

var testArr5 = [1,5,10,-2];
//uncomment line below to run function
//squares(testArr5);  //calls the squares function, passing in testArr5 as the argument