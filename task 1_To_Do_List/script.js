const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//When Enter key is pressed
inputBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") addTask();
  });
//Add Task function
function addTask() {
    if (inputBox.value === '') {
      alert("Please enter a task!");
      return;
    }
    
    const li = document.createElement("li");
    li.innerHTML = `
      ${inputBox.value}
      <div class="actions">
        <i class="bi bi-pencil" onclick="editTask(this)"></i>
        <i class="bi bi-trash" onclick="deleteTask(this)"></i>
      </div>
    `;
    
    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
  }