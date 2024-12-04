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
  //For checking and unchecking of tasks
  listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
  });
      // Delete task
      function deleteTask(element) {
        element.parentElement.parentElement.remove();
        saveData();
      }
  
      // Edit task
      function editTask(element) {
        const li = element.parentElement.parentElement;
        const task = li.firstChild.textContent.trim();
        
        li.innerHTML = `
          <input type="text" value="${task}" class="editing">
          <div class="actions">
            <i class="bi bi-check" onclick="saveEdit(this)"></i>
            <i class="bi bi-x" onclick="cancelEdit(this, '${task}')"></i>
          </div>
        `;
        
        li.querySelector('input').focus();
      }