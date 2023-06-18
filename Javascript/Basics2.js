//conditional statements
//if else
var age = 18;
if (age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}
//if else if
var marks = 80;
if (marks >= 80) {
    console.log("You got A grade");
}
else if (marks >= 60) {
    console.log("You got B grade");
}
else if (marks >= 40) {
    console.log("You got C grade");
}
else {
    console.log("You are failed");
}
//switch
var day = 2;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    default:
        console.log("Invalid day");
}
//for loop
for (var i = 0; i < 5; i++) {
    console.log(i);
}

//while loop
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//do while loop
var i = 0;
do {
    console.log(i);
    i++;
}
while (i < 5);

//for in loop
var obj = {
    name: "John",
    age: 30
};
for (var prop in obj) {
    console.log(prop);
}

//for of loop
var arr = [10, 20, 30];
for (var val of arr) {
    console.log(val);
}

//break
for (var i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

//continue
for (var i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

//try catch finally
//it is used to handle exceptions
//try block contains the code that may throw exception
//catch block contains the code that handles the exception
try {
    var x = 10;
    var y = 0;
    var z = x / y;
    console.log(z);
}
catch (e) {
    console.log(e);
}
finally {
    console.log("finally block");
}

//throw
//it is used to throw an exception
try {
    var x = 10;
    var y = 0;
    if (y == 0) {
        throw "Divide by zero exception";
    }
    var z = x / y;
    console.log(z);
}
catch (e) {
    console.log(e);
}
finally {
    console.log("finally block");
}

//functions
//Defination: Function is a block of code that performs a specific task
//Function is a first class object
//Function is a instance of the Object type
//Function behaves like any other object
//Function can be stored in a variable
//Function can be passed as an argument to another function
//Function can be returned from a function
//Function can be stored in an object
//Function can have properties and methods
//Function can be created and invoked
//Function can be self invoked
//Function can be invoked with the new operator

//Creating Functions

//1. Function Declaration
//this is the most common way to create a function
function add(x, y) {
    return x + y;
}
console.log(add(10, 20));

//2. Function Expression
var add = function (x, y) {
    return x + y;
}
console.log(add(10, 20));

//3. Function Constructor
var add = new Function("x", "y", "return x + y");

//4. Arrow Function
var add = (x, y) => x + y;
console.log(add(10, 20));

//Function Invocation
//1. Function Invocation Pattern
//when a function is invoked by using the function invocation pattern, then the this keyword inside the function will refer to the global object
function add(x, y) {
    console.log(this);
    return x + y;
}
add(10, 20);





