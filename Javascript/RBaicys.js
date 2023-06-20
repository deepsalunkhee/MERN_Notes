//Some mire bsics which will be use full for react

// Destructuring in JavaScript allows you to extract values from arrays or objects into distinct variables.

// Array Destructuring:
// --------------------
// Destructuring an array enables you to extract values based on their position within the array.

// Example 1: Destructuring an array
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
// a = 1, b = 2, c = 3

// Example 2: Skipping array elements
const [x, , z] = numbers;
// x = 1, z = 3

// Example 3: Using the rest operator
const [first, ...rest] = numbers;
// first = 1, rest = [2, 3]


// Object Destructuring:
// ---------------------
// Destructuring an object allows you to extract values based on their property names.

// Example 1: Destructuring an object
const person = { name: 'John', age: 30 };
const { name, age } = person;
// name = 'John', age = 30

// Example 2: Assigning new variable names
const { name: personName, age: personAge } = person;
// personName = 'John', personAge = 30

// Example 3: Default values
const { name: userName1, role = 'Guest' } = person;
// userName = 'John', role = 'Guest'

// Example 4: Nested object destructuring
const user = { name: 'Alice', address: { city: 'New York', country: 'USA' } };
const { name: userName, address: { city, country } } = user;
// userName = 'Alice', city = 'New York', country = 'USA'


// Destructuring Function Parameters:
// ---------------------------------
// Destructuring can also be used with function parameters, enabling concise access to specific properties.

// Example 1: Destructuring function parameters
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: 'Jane', age: 25 });
// Output: Name: Jane, Age: 25

// Example 2: Default values for function parameters
function displayUser({ name = 'Unknown', age = 0 }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ age: 30 });
// Output: Name: Unknown, Age: 30

// Example 3: Destructuring an array as a function parameter
function displayNumbers([a, b, c]) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}
displayNumbers([1, 2, 3]);
// Output: a: 1, b: 2, c: 3


// Conclusion:
// -----------
// Destructuring in JavaScript provides a concise way to extract values from arrays and objects.
// It simplifies code and enhances readability, especially when working with complex data structures.
// Understanding destructuring is crucial when learning React, as it is frequently used for component props and state manipulation.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The Rest operator, denoted by the ellipsis (...) syntax, allows you to represent an indefinite number of arguments as an array.

// Rest Parameter:
// ----------------
// The Rest parameter allows you to capture multiple function arguments into a single array.

// Example 1: Rest parameter in a function
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  const result = sum(1, 2, 3, 4, 5);
  // result = 15
  
  // Example 2: Rest parameter with other parameters
  function concatenate(separator, ...strings) {
    return strings.join(separator);
  }
  const combinedString = concatenate('-', 'Hello', 'World', '!');
  // combinedString = 'Hello-World-!'
  
  
  // Spread Operator:
  // -----------------
  // The Spread operator also uses the ellipsis (...) syntax, but it is used in a different context than the Rest parameter.
  // It allows you to expand an array or object into individual elements.
  
  // Example 1: Spread operator with arrays
  const numbers1 = [1, 2, 3];
  const combinedArray = [...numbers, 4, 5, 6];
  // combinedArray = [1, 2, 3, 4, 5, 6]
  
  // Example 2: Spread operator with objects
  const person1 = { name: 'John', age: 30 };
  const clonedPerson = { ...person };
  // clonedPerson = { name: 'John', age: 30 }
  
  // Example 3: Merging arrays with the spread operator
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const mergedArray = [...arr1, ...arr2];
  // mergedArray = [1, 2, 3, 4, 5, 6]
  
  
  // Usage in React:
  // ---------------
  // The Rest operator and Spread operator are commonly used in React for component props and state manipulation.
  
  // Example: Using Rest parameter in a React component
  function MyComponent({ prop1, prop2, ...restProps }) {
    // Access prop1 and prop2 individually
    console.log(prop1, prop2);
  
    // Access additional props using the rest operator
    console.log(restProps);
  
    return <div>My Component</div>;
  }
  
  // Example: Using Spread operator in a React component
  function ParentComponent() {
    const parentProps = { prop1: 'Value 1', prop2: 'Value 2' };
  
    return (
      <div>
        <ChildComponent {...parentProps} prop3="Value 3" />
      </div>
    );
  }
  
  function ChildComponent({ prop1, prop2, prop3 }) {
    // Access props individually
    console.log(prop1, prop2, prop3);
  
    return <div>Child Component</div>;
  }
  
  
  // Conclusion:
  // ------------
  // The Rest operator (Rest parameter) allows you to capture multiple function arguments as an array.
  // The Spread operator, on the other hand, allows you to expand arrays or objects into individual elements.
  // Understanding the Rest and Spread operators is essential when working with React components for handling props and state manipulation.
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // The Import and Export syntax is used in JavaScript to work with modules, enabling you to organize and share code between files.

// Exporting from a Module:
// ------------------------
// To make functions, objects, or variables available for other modules to use, you need to export them.

// Example 1: Exporting a single value
export const myFunction = () => {
    // Function code here
  };
  
  // Example 2: Exporting multiple values
  export const variable1 = 'Value 1';
  export const variable2 = 'Value 2';
  export const variable3 = 'Value 3';
  
  // Example 3: Exporting a function as default
  export default function myDefaultFunction() {
    // Function code here
  }
  
  
  // Importing from a Module:
  // ------------------------
  // To use functions, objects, or variables exported from other modules, you need to import them.
  
  // Example 1: Importing a named export
  import { myFunction1 } from './myModule';
  
  // Example 2: Importing multiple named exports
  import { variable1, variable2, variable3 } from './myModule';
  
  // Example 3: Importing a default export
  import myDefaultFunction from './myModule';
  
  
  // Default Exports:
  // -----------------
  // Default exports allow you to export a single value as the default export of a module.
  
  // Example: Default export in a module
  const myFunction = () => {
    // Function code here
  };
  export default myFunction;
  
  // Example: Importing a default export
  import myFunction from './myModule';
  
  
  // Renaming Exports and Imports:
  // -----------------------------
  // You can rename exports and imports using the 'as' keyword to avoid naming conflicts or provide more descriptive names.
  
  // Example: Renaming an export
  export { myFunction as renamedFunction };
  
  // Example: Renaming an import
  import { myFunction as renamedFunction } from './myModule';
  
  
  // Exporting and Importing All Values:
  // -----------------------------------
  // You can export and import all values from a module using the '*' (wildcard) syntax.
  
  // Example: Exporting all values from a module
  export * from './myModule';
  
  // Example: Importing all values from a module
  import * as myModule from './myModule';
  
  
  // Combining Named and Default Exports:
  // ------------------------------------
  // You can combine named and default exports in a module.
  
  // Example: Combining named and default exports in a module
  export const variable1 = 'Value 1';
  export default function myDefaultFunction() {
    // Function code here
  };
  
  // Example: Importing named and default exports
  import myDefaultFunction, { variable1 } from './myModule';
  
  
  // Conclusion:
  // ------------
  // The Import and Export syntax allows you to create modular code and share functionality between JavaScript files.
  // By exporting and importing values, you can organize and reuse code more effectively, making it essential for learning React.
  // Understanding how to export, import, rename, and combine exports will help you structure your React applications more efficiently.
  