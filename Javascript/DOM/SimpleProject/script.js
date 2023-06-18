// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the necessary elements from the DOM
    var taskInput = document.getElementById('taskInput');
    var addBtn = document.getElementById('addBtn');
    var taskList = document.getElementById('taskList');
  
    // Add a click event listener to the button
    addBtn.addEventListener('click', function() {
      // Get the task entered by the user
      var task = taskInput.value;
  
      if (task.trim() !== '') {
        // Create a new list item
        var listItem = document.createElement('li');
  
        // Create a new checkbox element
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
  
        // Create a new span element to hold the task text
        var taskText = document.createElement('span');
        taskText.textContent = task;
  
        // Create a new button element for task removal
        var removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
  
        // Add event listener to the remove button
        removeBtn.addEventListener('click', function() {
          listItem.remove();
        });
  
        // Add event listener to the checkbox
        checkbox.addEventListener('change', function() {
          if (checkbox.checked) {
            taskText.classList.add('completed');
          } else {
            taskText.classList.remove('completed');
          }
        });
  
        // Append checkbox, task text, and remove button to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(removeBtn);
  
        // Append the list item to the task list
        taskList.appendChild(listItem);
  
        // Clear the input field
        taskInput.value = '';
      }
    });
  });



  