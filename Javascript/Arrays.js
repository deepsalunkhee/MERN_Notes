//Array in Javascript
//Defination: Array is a collection of elements
//Array is a special type of object
//Array is mutable
//Array is dynamic

//Creating Arrays

//1. Array Literal
//this is the most common way to create an array
var arr = [];
console.log(arr);

//2. Array Constructor
var arr = new Array();
console.log(arr);

//Methods of Array
//1. length
//this property returns the length of the array
var arr = [10, 20, 30];
console.log(arr.length);
//The out put will be 3

//2. concat()
//this method is used to merge two or more arrays
var arr1 = [10, 20, 30];
var arr2 = [40, 50, 60];
console.log(arr1.concat(arr2));
//The out put will be [10, 20, 30, 40, 50, 60]

//3. join()
//this method is used to join all elements of an array into a string
var arr = [10, 20, 30];
console.log(arr.join());
//The out put will be 10,20,30

//4. pop()
//this method is used to remove the last element from an array and returns that element
var arr = [10, 20, 30];
console.log(arr.pop());
//The out put will be 30

//5. push()
//this method is used to add one or more elements to the end of an array and returns the new length of the array
var arr = [10, 20, 30];
console.log(arr.push(40));
//The out put will be 4

//6. reverse()
//this method is used to reverse the order of the elements in an array
var arr = [10, 20, 30];
console.log(arr.reverse());
//The out put will be [30, 20, 10]

//7. shift()
//this method is used to remove the first element from an array and returns that element
var arr = [10, 20, 30];
console.log(arr.shift());
//The out put will be 10

//8. slice()
//this method is used to extract a section of an array and returns a new array
var arr = [10, 20, 30];
console.log(arr.slice(1, 2));
//The out put will be [20]
//Explanation: The first parameter is the starting index and the second parameter is the ending index

//9. sort()
//this method is used to sort the elements of an array
var arr = [10, 20, 30];
console.log(arr.sort());
//The out put will be [10, 20, 30]

//10. splice()
//this method is used to add or remove elements from an array
var arr = [10, 20, 30];
console.log(arr.splice(1, 1, 40));
//The out put will be [20]
//Explanation: The first parameter is the starting index, the second parameter is the number of elements to remove, the third parameter is the element to add

//11. unshift()
//this method is used to add one or more elements to the beginning of an array and returns the new length of the array
var arr = [10, 20, 30];
console.log(arr.unshift(40));
//The out put will be 4
//Explanation: The parameter is the element to add

//There are many such methods of Array in Javascript which you can find in the Javascript Reference section of W3Schools.com


//Looping through Arrays
//1. for loop
var arr = [10, 20, 30];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//The out put will be 10, 20, 30

//2. for in loop
var arr = [10, 20, 30];
for (var i in arr) {
    console.log(arr[i]);
}
//The out put will be 10, 20, 30

//3. forEach() method
var arr = [10, 20, 30];
arr.forEach(function (element) {
    console.log(element);
}
);
//The out put will be 10, 20, 30
//Explanation: The forEach() method takes a function as a parameter and that function takes an element as a parameter

//4.map() method
var arr = [10, 20, 30];
var newArr = arr.map(function (element) {
    return element * 2;
}
);
console.log(newArr);
//The out put will be [20, 40, 60]
//Explanation: The map() method takes a function as a parameter and that function takes an element as a parameter and returns a new array

//5.filter() method
var arr = [10, 20, 30];
var newArr = arr.filter(function (element) {
    return element > 10;
}
);
console.log(newArr);
//The out put will be [20, 30]
//Explanation: The filter() method takes a function as a parameter and that function takes an element as a parameter and returns a new array

//6.reduce() method
var arr = [10, 20, 30];
var sum = arr.reduce(function (total, element) {
    return total + element;
}
);
console.log(sum);
//The out put will be 60
//Explanation: The reduce() method takes a function as a parameter and that function takes two parameters, the first parameter is the total and the second parameter is the element and returns a new array

