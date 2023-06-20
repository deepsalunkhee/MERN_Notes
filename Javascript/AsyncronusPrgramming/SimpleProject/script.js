/**
* Fetch and parse the data from the data. json file and display it in the user's data
*/
async function fetchData() {
    try {
      const response = await fetch('data.json'); // Fetch the JSON file
      const data = await response.json(); // Parse the response as JSON
  
      displayUserData(data); // Display the user data
    } catch (error) {
      console.error('Error fetching data:', error);
      const userInfoDiv = document.getElementById('userInfo');
      userInfoDiv.textContent = 'Error fetching data. Please try again.';
    }
  }
  
  /**
  * Displays data from API. It's used to display user data in " userInfo " div. This div is displayed when user logs in
  * 
  * @param data - Data from API. It should contain name age
  */
  function displayUserData(data) {
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = `
      <p>Name: ${data.name}</p>
      <p>Age: ${data.age}</p>
      <p>Occupation: ${data.occupation}</p>
    `;
  }
  
  // Fetch and display the user data
  fetchData();
  