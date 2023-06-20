/**
* Logs in a user based on username and password. This is a helper function for loginUser ()
* 
* @param username - The username to login with
* @param password - The password to login with ( optional ).
* 
* @return { Promise } A promise that resolves to a string when login is
*/
function loginUser(username, password) {
    return new Promise((resolve, reject) => {
      // Simulating login verification
      setTimeout(() => {
        // Resolves the login successful or invalid username or password.
        if (username === 'admin' && password === 'password') {
          resolve('Login successful');
        } else {
          reject('Invalid username or password');
        }
      }, 2000); // Simulate a delay of 2 seconds
    });
  }
  
  const loginButton = document.getElementById('loginButton');
  loginButton.addEventListener('click', () => {
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginMessage = document.getElementById('loginMessage');
  
    const username = usernameInput.value;
    const password = passwordInput.value;
  
    loginMessage.textContent = 'Logging in...';
  
    loginUser(username, password)
      .then((message) => {
        loginMessage.textContent = message;
      })
      .catch((error) => {
        loginMessage.textContent = error;
      });
  });
  