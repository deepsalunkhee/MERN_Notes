//call back functions in javascript

//Deifination of call back function
function callBackFunction(callback) {
    console.log("callBackFunction is called");
    callback();
}
//explanation of the above code
//here we have a function named callBackFunction which takes a parameter named callback
//and then we are calling the callback function inside the callBackFunction
//now we will call the callBackFunction and pass a function as a parameter
//and then we will see the output
//calling the callBackFunction
callback= ()=> {
    console.log("This is the callback function");
}
callBackFunction(callback);
//output    
// callBackFunction is called
// This is the callback function

