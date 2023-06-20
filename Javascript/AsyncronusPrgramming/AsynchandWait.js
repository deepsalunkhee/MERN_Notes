//What is asynchronous programming?
//Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress.

//What is synchronous programming?
//Synchronous programming is a means of programming in which a unit of work runs and completes before the next unit is run.

//What is the difference between synchronous and asynchronous programming?
//Synchronous programming is a means of programming in which a unit of work runs and completes before the next unit is run.
//Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress.

//What is the difference between asynchronous and non-blocking?
//Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress.
//Non-blocking means that if an answer can't be returned rapidly, the program returns control to the caller and allows the caller to execute other functions.

//What is the difference between asynchronous and multi-threaded?
//Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress.
//Multithreading is a technique that allows for concurrent execution of two or more parts of a program for maximum utilization of CPU.

//what is asyn and wait
//The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
//The async keyword designates an asynchronous function in which you can use the await keyword within the body of the function.
//The await keyword causes the JavaScript runtime to pause your code on this line, allowing other code to execute in the meantime, until the async function call has returned its result. Once that's complete, your code continues to execute starting on the next line.
//The await keyword can only be used inside an async function. If you use it outside of an async function's body, you will get a SyntaxError.


//what is the need of asyn and wait
//The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.



//Example of asyn and wait in javascript

// const fetchUsersButton = document.getElementById('fetch-users');
// const userContainer = document.getElementById('user-container');

// fetchUsersButton.addEventListener('click', fetchUsers);

// async function fetchUsers() {
//   // Clear the user container
//   userContainer.innerHTML = '';

//   // Fetch data from the Random User API
//   const response = await fetch('https://randomuser.me/api/?results=50');
//   const data = await response.json();

//   // Process the retrieved user data
//   renderUsers(data.results);
// }

// function renderUsers(users) {
//   users.forEach(user => {
//     // Create user card elements
//     const userCard = document.createElement('div');
//     userCard.classList.add('user-card');

//     const userImage = document.createElement('img');
//     userImage.src = user.picture.medium;

//     const userName = document.createElement('h3');
//     userName.textContent = `${user.name.first} ${user.name.last}`;

//     const userEmail = document.createElement('p');
//     userEmail.textContent = user.email;

//     // Append user card elements to the container
//     userCard.appendChild(userImage);
//     userCard.appendChild(userName);
//     userCard.appendChild(userEmail);
//     userContainer.appendChild(userCard);
//   });
// }

