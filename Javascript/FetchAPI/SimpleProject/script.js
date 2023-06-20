const fetchUsersButton = document.getElementById('fetch-users');
const userContainer = document.getElementById('user-container');

fetchUsersButton.addEventListener('click', fetchUsers);

function fetchUsers() {
  // Clear the user container
  userContainer.innerHTML = '';

  // Fetch data from the Random User API
  fetch('https://randomuser.me/api/?results=50')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Process the retrieved user data
      renderUsers(data.results);
    })
    .catch(error => {
      console.error('Error:', error);
      displayError(error.message);
    });
}

function renderUsers(users) {
  users.forEach(user => {
    // Create user card elements
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    const userImage = document.createElement('img');
    userImage.src = user.picture.medium;

    const userName = document.createElement('h3');
    userName.textContent = `${user.name.first} ${user.name.last}`;

    const userEmail = document.createElement('p');
    userEmail.textContent = user.email;

    // Append user card elements to the container
    userCard.appendChild(userImage);
    userCard.appendChild(userName);
    userCard.appendChild(userEmail);
    userContainer.appendChild(userCard);
  });
}

function displayError(message) {
  const errorElement = document.createElement('p');
  errorElement.style.color = 'red';
  errorElement.textContent = `Error: ${message}`;
  userContainer.appendChild(errorElement);
}
