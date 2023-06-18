//Objects in Javascript
//Defination: Objects are collection of properties
//Properties are key value pairs
//Objects are mutable
//Objects are dynamic
//Objects are accessed by reference

//Creating Objects

//1. Object Literal
//this is the most common way to create an object
var obj = {};
console.log(obj);

//2. Object Constructor
var obj = new Object();
console.log(obj);

//3. Object.create()
var obj = Object.create(null);
console.log(obj);

//4. Function Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var obj = new Person("John", 30);
console.log(obj);

//example of Object Literal
var obj = {
    name: "John",
    age: 30
};

