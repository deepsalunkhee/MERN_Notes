// Accessing DOM elements
const titleElement = document.getElementById("title");
const contentElements = document.getElementsByClassName("content");
const firstContentElement = contentElements[0];

// Modifying DOM elements
titleElement.innerHTML = "Updated Title";
firstContentElement.style.color = "blue";

// Creating new DOM elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph);

// Adding event listener
titleElement.addEventListener("click", function() {
  alert("Title clicked!");
});


//what is DOM
//DOM stands for Document Object Model. It is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.
//The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

//DOM tree analogy
//The DOM is a tree-structure representation of all the elements of a Web page. When browsers render Web pages, they create an internal model of the pages called the Document Object Model or DOM. The DOM is not a part of the HTML or CSS specs, but is built into the browser. JavaScript can be used to modify the DOM.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Selecting a element in DOM

//getElementById()
//The getElementById() method returns the element that has the ID attribute with the specified value. This method is one of the most common methods in the HTML DOM, and is used almost every time you want to manipulate, or get info from, an element on your document.
//example
//<p id="demo"></p>
//<script>
//var x = document.getElementById("demo");
//</script>
//How we can use it
//<p id="demo"></p>
//<script>
//function myFunction() {
//  var x = document.getElementById("demo");
//  x.style.color = "red";
//}

//getElementsByClassName()
//The getElementsByClassName() method returns a collection of all elements in the document with the specified class name, as a NodeList object.
//The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.
//example
//<p class="intro">Hello World!</p>
//<p class="intro">Hello World!</p>
//<p class="intro">Hello World!</p>
//<script>
//var x = document.getElementsByClassName("intro");
//</script>
//How we can use it
//<p class="intro">Hello World!</p>
//<p class="intro">Hello World!</p>
//<p class="intro">Hello World!</p>
//<script>
//function myFunction() {
//  var x = document.getElementsByClassName("intro");
//  x[0].style.color = "red";
//  x[1].style.color = "blue";
//}

//getElementsByTagName()
//The getElementsByTagName() method returns a collection of all elements in the document with the specified tag name, as a NodeList object.
//The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.
//example
//<p>Hello World!</p>
//<p>Hello Norway!</p>
//<p>Hello Denmark!</p>
//<script>
//var x = document.getElementsByTagName("p");
//</script>
//How we can use it
//<p>Hello World!</p>
//<p>Hello Norway!</p>
//<p>Hello Denmark!</p>
//<script>
//function myFunction() {
//  var x = document.getElementsByTagName("p");
//  x[0].style.display = "none";
//}

//querySelector()
//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
//This method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.
//If the selector matches an ID in document that is used several times (Note that an "id" should be unique within a page and should not be used more than once), it returns the first matching element.
//example
//<p class="intro">Hello World!</p>
//<p class="intro">Hello World!</p>
//<p>Hello Norway!</p>
//<script>
//var x = document.querySelector(".intro");
//</script>
//How we can use it
//<p class="intro">Hello World!</p>
//<p class="intro">Hello World!</p>
//<p>Hello Norway!</p>
//<script>
//function myFunction() {
//  var x = document.querySelector(".intro");
//  x.style.color = "red";
//}

//querySelectorAll()
//The querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.
//The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.
//example
//<p class="intro">Hello World!</p>
//<p class="intro">Hello World!</p>
//<p>Hello Norway!</p>
//<script>
//var x = document.querySelectorAll(".intro");
//</script>
//How we can use it
//<p class="intro">Hello World!</p>
//<p class="intro">Hello World!</p>
//<p>Hello Norway!</p>
//<script>
//function myFunction() {
//  var x = document.querySelectorAll(".intro");
//  x[0].innerHTML = "Paragraph changed!";
//}
//The result of the avbove code will be
//Paragraph changed!
//Hello World!
//Hello Norway!

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//styling an element
//The style property is used to get as well as set the inline style of an element. When getting, it returns a CSSStyleDeclaration object that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element's inline style attribute.
//example

//<p id="p1">Hello World!</p>
//<script>
//var x = document.getElementById("p1").style;
//</script>

//How we can use it
//<p id="p1">Hello World!</p>
//<script>
//function myFunction() {

//  var x = document.getElementById("p1").style;
//  x.color = "red";
//  x.fontFamily = "Arial";
//}
//</script>

//The result of the above code will be
//Hello World! (in red color and Arial font)


//we can use this property to change the style of an element in many ways


/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Creating a new element
//The createElement() method creates an Element Node with the specified name.
//This method returns a new element node, with the specified name.
//Here is an example of creating a new element on a HTML page along with both the codes and the result.
//example
//<p id="demo"></p>
//<script>
//var para = document.createElement("p");
//var node = document.createTextNode("This is new.");
//para.appendChild(node);

//var element = document.getElementById("div1");  
//element.appendChild(para);  
//</script>
//How we can use it
//<p id="demo"></p>
//<script>
//function myFunction() {
//  var para = document.createElement("p");
//  var node = document.createTextNode("This is new.");
//  para.appendChild(node);

//  var element = document.getElementById("div1");
//  element.appendChild(para);
//}
//</script>

//The result of the above code will be
//This is new.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Removing an element
//The removeChild() method removes a specified child node of the specified element. 
//If the removed child node was the last child of the specified element, no error is thrown.
//The removeChild() method returns the removed node as a Node object, or null if the node does not exist.
//example
//<div id="div1">
//  <p id="p1">This is a paragraph.</p>
//  <p id="p2">This is another paragraph.</p>
//</div>
//<script>
//var parent = document.getElementById("div1");
//var child = document.getElementById("p1");
//parent.removeChild(child);
//</script>
//How we can use it
//<div id="div1">

//  <p id="p1">This is a paragraph.</p>
//  <p id="p2">This is another paragraph.</p>
//</div>
//<script>
//function myFunction() {
//  var parent = document.getElementById("div1");
//  var child = document.getElementById("p1");
//  parent.removeChild(child);
//}
//</script>

//The result of the above code will be
//This is another paragraph.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Modifing the Text of an HTML Element

//The easiest way to modify the content of an HTML element is by using the innerHTML property.
//The innerHTML property can be used to get or change any HTML element, including <html> and <body>.
//example
//<p id="p1">Hello World!</p>
//<script>
//document.getElementById("p1").innerHTML = "New text!";
//</script>
//How we can use it
//<p id="p1">Hello World!</p>
//<script>
//function myFunction() {
//  document.getElementById("p1").innerHTML = "New text!";
//}
//</script>

//The result of the above code will be
//New text!

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Traversing the DOM

//parent Traverse
//The parentElement property returns the parent element of the specified element.
//The parentNode property returns the parent node of the specified node, as a Node object.
//example
//<div id="div1">
//  <p id="p1">This is a paragraph.</p>
//  <p id="p2">This is another paragraph.</p>
//</div>
//<script>
//var x = document.getElementById("p1").parentElement.nodeName;
//var y = document.getElementById("p2").parentNode.nodeName;
//</script>
//How we can use it
//<div id="div1">
//  <p id="p1">This is a paragraph.</p>
//  <p id="p2">This is another paragraph.</p>
//</div>
//<script>
//function myFunction() {
//  var x = document.getElementById("p1").parentElement.nodeName;
//  var y = document.getElementById("p2").parentNode.nodeName;
//}
//</script>

//The result of the above code will be
//DIV
//DIV

//child Traverse
//The childNodes property returns a collection of a node's child nodes, as a NodeList object.
//The firstChild property returns the first child node of the specified node, as a Node object.
//The firstElementChild property returns the first child element of the specified element.
//The lastChild property returns the last child node of the specified node, as a Node object. 
//The lastElementChild property returns the last child element of the specified element.
//The nextSibling property returns the node immediately following the specified node, in the same tree level.
//The nextElementSibling property returns the element immediately following the specified element, in the same tree level.
//The previousSibling property returns the node immediately before the specified node, in the same tree level.
//The previousElementSibling property returns the element immediately before the specified element, in the same tree level.
//example
//<div id="div1">
//  <p id="p1">This is a paragraph.</p>
//  <p id="p2">This is another paragraph.</p>
//</div>
//<script>
//var x = document.getElementById("div1").childNodes[0].nodeName;
//var y = document.getElementById("div1").firstChild.nodeName;
//var z = document.getElementById("div1").firstElementChild.nodeName;
//var a = document.getElementById("div1").lastChild.nodeName;
//var b = document.getElementById("div1").lastElementChild.nodeName;
//var c = document.getElementById("p1").nextSibling.nodeName;
//var d = document.getElementById("p1").nextElementSibling.nodeName;
//var e = document.getElementById("p2").previousSibling.nodeName;
//var f = document.getElementById("p2").previousElementSibling.nodeName;
//</script>
//How we can use it
//<div id="div1">
//  <p id="p1">This is a paragraph.</p>
//  <p id="p2">This is another paragraph.</p>
//</div>
//<script>
//function myFunction() {
//  var x = document.getElementById("div1").childNodes[0].nodeName;
//  var y = document.getElementById("div1").firstChild.nodeName;
//  var z = document.getElementById("div1").firstElementChild.nodeName;
//  var a = document.getElementById("div1").lastChild.nodeName;
//  var b = document.getElementById("div1").lastElementChild.nodeName;
//  var c = document.getElementById("p1").nextSibling.nodeName;
//  var d = document.getElementById("p1").nextElementSibling.nodeName;
//  var e = document.getElementById("p2").previousSibling.nodeName;
//  var f = document.getElementById("p2").previousElementSibling.nodeName;
//}
//</script>

//The result of the above code will be
//#text
//#text
//P
//#text
//#text
//#text
//P
//#text
//#text

//Element vs Node
//The difference between an element and a node is that an element is also a node, but a node is not necessarily an element.
//The element nodes are: HTML elements, HTML attributes, text nodes.
//The node types that are not element nodes: document, comments, text.
//example
//<div id="div1">
//  <p id="p1">This is a paragraph.</p>
//  <p id="p2">This is another paragraph.</p>
//</div>
//<script>
//var x = document.getElementById("div1").nodeType;
//var y = document.getElementById("p1").nodeType;
//var z = document.getElementById("p1").firstChild.nodeType;
//</script>
//How we can use it
//<div id="div1">
//  <p id="p1">This is a paragraph.</p>
//  <p id="p2">This is another paragraph.</p>
//</div>
//<script>
//function myFunction() {
//  var x = document.getElementById("div1").nodeType;
//  var y = document.getElementById("p1").nodeType;
//  var z = document.getElementById("p1").firstChild.nodeType;
//}
//</script>

//The result of the above code will be
//1
//1
//3

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Event Listeners

//The addEventListener() method attaches an event handler to the specified element.
//The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
//You can add many event handlers to one element.
//You can add many event handlers of the same type to one element, i.e two "click" events.
//You can add event listeners to any DOM object not only HTML elements. i.e the window object.
//The addEventListener() method makes it easier to control how the event reacts to bubbling.
//Example
//<button id="myBtn">Try it</button>
//<script>
//document.getElementById("myBtn").addEventListener("click", function(){
//  alert("Hello World!");
//});
//</script>
//Explanation for the above code
//The addEventListener() method attaches an event handler to the specified element.
//The first parameter is the type of the event (like "click" or "mousedown").
//The second parameter is the function we want to call when the event occurs.
//The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
//You can add many event handlers to one element.
//You can add many event handlers of the same type to one element, i.e two "click" events.
//You can add event listeners to any DOM object not only HTML elements. i.e the window object.
//The addEventListener() method makes it easier to control how the event reacts to bubbling.

//typea of events
//Mouse Events
//Keyboard Events
//Form Events
//Document/Window Events
//Drag Events
//Clipboard Events
//Media Events
//Touch Events
//CSS Events
//Animation Events
//Transition Events

//Mouse Events
//onclick - occurs when the user clicks on an element
//oncontextmenu - occurs when the user right-clicks on an element to open a context menu
//ondblclick - occurs when the user double-clicks on an element
//onmousedown - occurs when the user presses a mouse button over an element
//onmouseenter - occurs when the pointer is moved onto an element
//onmouseleave - occurs when the pointer is moved out of an element
//onmousemove - occurs when the pointer is moving while it is over an element
//onmouseover - occurs when the pointer is moved onto an element, or onto one of its children
//onmouseout - occurs when a user moves the mouse pointer out of an element, or out of one of its children
//onmouseup - occurs when a user releases a mouse button over an element

//Keyboard Events
//onkeydown - occurs when the user is pressing a key
//onkeypress - occurs when the user presses a key
//onkeyup - occurs when the user releases a key

//Form Events
//onblur - occurs when an element loses focus
//onchange - occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)
//onfocus - occurs when an element gets focus
//onfocusin - occurs when an element is about to get focus
//onfocusout - occurs when an element is about to lose focus
//oninput - occurs when an element gets user input
//oninvalid - occurs when an element is invalid
//onreset - occurs when a form is reset
//onsearch - occurs when the user writes something in a search field (for <input="search">)

//There are many more events. Please visit https://www.w3schools.com/jsref/dom_obj_event.asp for more information

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Event propagation

//Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?
//In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
//In bubbling, the innermost element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
//In capturing, the outermost element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.
//In bubbling, the innermost element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
//In capturing, the outermost element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.
//Example
//<div id="myDiv">
//  <p id="myP">Click Me.</p>
//</div>
//<script>
//document.getElementById("myDiv").addEventListener("click", function(){
//  alert("You clicked on the DIV element!");
//}, false);
//document.getElementById("myP").addEventListener("click", function(){
//  alert("You clicked on the P element!");
//}, false);
//</script>
//Explanation for the above code
//The addEventListener() method attaches an event handler to the specified element.
//The first parameter is the type of the event (like "click" or "mousedown").
//The second parameter is the function we want to call when the event occurs.
//The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.
//The default value is false, which will use bubbling.
//If set to true, the event handler is executed in the capturing phase.
//If set to false, which is default, the event handler is executed in the bubbling phase.

//Event Bubbling vs Event Capturing

//Event Bubbling
//With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.
//Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?
//In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
//In bubbling, the innermost element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
//In capturing, the outermost element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.
//In bubbling, the innermost element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
//In capturing, the outermost element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

//Event Capturing
//With capturing, the event is first captured by the outermost element and propagated to the inner elements.
//Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?
//In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
//In bubbling, the innermost element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
//In capturing, the outermost element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.
//In bubbling, the innermost element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
//In capturing, the outermost element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.


/////////////////////////////////////////////////////////////////////////////////////////////////////////



