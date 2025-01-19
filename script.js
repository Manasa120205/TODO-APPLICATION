// Get DOM elements
const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const taskCategory = document.getElementById("taskCategory");
const taskList = document.getElementById("taskList");

// Event listener to add a task
addTaskButton.addEventListener("click", function() {
  const taskValue = taskInput.value.trim();
  const dateValue = taskDate.value;
  const timeValue = taskTime.value;
  const categoryValue = taskCategory.value;

  if (taskValue !== "") {
    // Create a new list item
    const li = document.createElement("li");

    // Set up task content
    li.innerHTML = `
            <span><strong>${taskValue}</strong> - <em>${categoryValue}</em><br>Due: ${dateValue} ${timeValue}</span>
            <div>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </div>
        `;

    // Add task to list
    taskList.appendChild(li);

    // Clear input fields
    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";

    // Mark task as complete
    li.querySelector(".complete").addEventListener("click", function() {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    });

    // Delete task
    li.querySelector(".delete").addEventListener("click", function() {
      li.remove();
    });
  }
});
