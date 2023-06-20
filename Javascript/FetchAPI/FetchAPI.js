//q:what is fetch API?
//ans: The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
// It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

//q:what is the difference between fetch and ajax?
//ans: Fetch is a modern replacement for XMLHttpRequest. It is not yet supported by all browsers, but getting there.
// Fetch is a better choice than XMLHttpRequest because it uses promises instead of callbacks and it is not limited to XML.
// Fetch is a better choice because it is built into the browser rather than bolted on via XMLHttpRequest.
// Fetch is a better choice because it is more flexible and powerful.
// Fetch is a better choice because it is more modern and has a cleaner, more logical API.
// Fetch is a better choice because it is easier to use.
// Fetch is a better choice because it is more efficient.
// Fetch is a better choice because it is more secure.


//FETCH API

//FERTCH API sudo code:
fetch(url, options)
   .then(function (response) {
       //handle response
   })
   .catch(function (err) {
       //handle error
   });

//Explanation:
//The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not. You can also optionally pass in an init options object as the second argument (see Request).

//FETCH API Example:
fetch('http://example.com/movies.json')
    .then(function (response) {
        return response.json();
    }
    )
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    }
    );

//Explanation:
//The first then() returns the response object. The response object has a json() method that returns a promise. The promise resolves to a JavaScript object that is the result of parsing the body text as JSON.
//The second then() logs the JSON string to the console.

//What is parsing?
//Parsing is the process of analysing a string of symbols, either in natural language, computer languages or data structures, conforming to the rules of a formal grammar. The term parsing comes from Latin pars (orationis), meaning part (of speech).

//////////////////////////////////////////////////////////////////////////////////////////////////////////


//Fecth API Option

//The fetch() method optionally accepts a second parameter, an init object that allows you to control a number of different settings:
//method: The request method, e.g., GET, POST. Note that the Origin header is not set on Fetch requests with a method of HEAD or GET.
//headers: Any headers you want to add to your request, contained within a Headers object or an object literal with ByteString values. Note that some names are forbidden.
//body: Any body that you want to add to your request: this can be a Blob, BufferSource, FormData, URLSearchParams, or USVString object. Note that a request using the GET or HEAD method cannot have a body.
//mode: The mode you want to use for the request, e.g., cors, no-cors, or same-origin. The default is cors.
//credentials: The request credentials you want to use for the request: omit, same-origin, or include. The default is same-origin.
//cache: The cache mode you want to use for the request: default, no-store, reload, no-cache, force-cache, or only-if-cached.
//redirect: The redirect mode to use: follow (automatically follow redirects), error (abort with an error if a redirect occurs), or manual (handle redirects manually). The default is follow.
//referrer: A USVString specifying the referrer of the request. This can be a same-origin URL, about:client, or an empty string.
//integrity: Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAeR7Ii8iipg95bu2u8C4s=).


//Method

//The method of the request (e.g., GET, POST, etc.). The default is GET.
//The following code snippet shows how to make a simple GET request with fetch().
fetch('http://example.com/movies.json', {
    method: 'GET', // or 'PUT'
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    }
    )
    .catch((error) => {
        console.error('Error:', error);
    }
    );

//Explanation:
//Here we are making a GET request to the movies.json file we created earlier. We are also passing in an init object that contains the method, headers, and body of our request. The body of our request is a JSON string of the data we want to send. We are also using the json() method to parse the response as JSON.
//The first then() returns the response object. The response object has a json() method that returns a promise. The promise resolves to a JavaScript object that is the result of parsing the body text as JSON.
//The second then() logs the JSON string to the console.


