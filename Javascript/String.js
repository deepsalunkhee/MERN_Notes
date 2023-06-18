//String in javascript
//Defination: String is a collection of characters
//String is immutable
//String is dynamic
//Creating Strings


//1. String Literal
//this is the most common way to create a string
var str = "";
console.log(str);

//2. String Constructor
var str = new String();
console.log(str);


//Methods of String
//1. length
//this property returns the length of the string
var str = "Hello World";
console.log(str.length);

//2. charAt()
//this method returns the character at the specified index
var str = "Hello World";
console.log(str.charAt(0));

//3. charCodeAt()
//this method returns the unicode of the character at the specified index
var str = "Hello World";
console.log(str.charCodeAt(0));

//4. concat()
//this method concatenates the string arguments to the calling string and returns a new string
var str = "Hello";
console.log(str.concat(" World"));

//5. indexOf()
//this method returns the index within the calling string object of the first occurence of the specified value, starting the search at fromIndex, returns -1 if the value is not found
var str = "Hello World";
console.log(str.indexOf("o"));

//6. lastIndexOf()
//this method returns the index within the calling string object of the last occurence of the specified value, starting the search at fromIndex, returns -1 if the value is not found
var str = "Hello World";
console.log(str.lastIndexOf("o"));

//7. match()
//this method retrieves the matches when matching a string against a regular expression
var str = "Hello World";
console.log(str.match("o"));

//8. replace()
//this method replaces the matched substring with a new substring
var str = "Hello World";
console.log(str.replace("World", "John"));

//9. search()
//this method executes the search for a match between a regular expression and this string object
var str = "Hello World";
console.log(str.search("World"));

//there are many such methods of string in javascript we don't need to remember all of them, we can always refer to the documentation


//Literal template
//this is a new feature of ES6
//this is used to create a string with multiple lines and embedded expressions
var name = "John";
var age = 30;
var str = `Hello ${name} you are ${age} years old`;
console.log(str);

