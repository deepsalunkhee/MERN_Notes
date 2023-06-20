//what is ES6?
//ES6 is the 6th version of ECMAScript, which is a standardization of JavaScript.
//ECMAScript is a standard for scripting languages like JavaScript, JScript, etc.
//ECMAScript is a standard maintained by the ECMA International standards organization.

//Detailed notes on ES6 features

// 1. let and const
// 2. Arrow functions
// 3. Default parameters
// 4. Rest and spread operators
// 5. Destructuring
// 6. Template literals
// 7. Classes
// 8. Promises
// 9. Async and await
// 10. Modules
// 11. Generators
// 12. Maps and sets
// 13. Symbols
// 14. Iterators
// 15. for...of loop
// 16. Array methods
// 17. Object methods
// 18. String methods
// 19. Number methods
// 20. Math methods
// 21. Date methods
// 22. Regular expressions
// 23. Error handling
// 24. Strict mode
// 25. New data types
// 26. New data structures
// 27. New methods....ans much more


//Some IMP ones in detail

//Classes

//Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
//The class syntax is NOT introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.
//JavaScript classes are introduced in ECMAScript 6 and are syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.
//JavaScript classes are blueprints for JavaScript objects.
//Use the keyword class to create a class, and always add the constructor() method.

//Example
// class Car {
//   constructor(brand) {

//     this.carname = brand;
//   }
// }

// mycar = new Car("Ford");

// console.log(mycar.carname);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Promises


//Introduction to Promises:

//Promises represent a value that may not be available yet but will be resolved at some point in the future.
//They are used to handle asynchronous operations such as API requests, database queries, or file I/O.

//Promise States:

// Promises have three possible states: pending, fulfilled, or rejected.
// When a promise is created, it is initially in the pending state.
// If the operation is successful, the promise transitions to the fulfilled state and holds the resolved value.
// If an error occurs, the promise transitions to the rejected state and holds the reason for rejection.

//Creating Promises:

// Promises are created using the Promise constructor, which takes a callback function as an argument.
// The callback function receives two parameters: resolve and reject.
// Inside the callback, you perform the asynchronous operation and call resolve(value) when it succeeds or reject(reason) when it fails.


// Promise Chaining:

// Promises can be chained together using the then() method to handle the resolved value or the catch() method to handle rejections.
// The then() method takes two optional callback functions: onFulfilled and onRejected.
// Each then() call returns a new promise, allowing you to chain multiple asynchronous operations together.


// Handling Errors:

// Promises have a built-in error handling mechanism through the catch() method.
// The catch() method is used to handle any rejections that occur during the promise chain.
// It is typically placed at the end of the chain to catch and handle any errors that were not explicitly handled in previous then() blocks.

// Promise.all():

// The Promise.all() method takes an array of promises as input and returns a new promise that resolves when all the input promises have resolved.
// It is useful when you need to wait for multiple asynchronous operations to complete before proceeding.

// Promise.race():

// The Promise.race() method takes an array of promises as input and returns a new promise that resolves or rejects as soon as the first promise in the input array resolves or rejects.
// It is useful when you want to execute multiple asynchronous operations simultaneously and only need the result of the fastest one.

// Promisification:

// Promisification is the process of converting callback-based functions into promise-based functions.
// It allows you to work with traditional callback-style APIs in a more promise-oriented way.

// Async/Await with Promises:

// The async and await keywords provide a syntactic sugar on top of promises.
// The async keyword is used to define an asynchronous function that implicitly returns a promise.
// The await keyword is used inside an async function to pause the execution and wait for a promise to resolve or reject before proceeding.