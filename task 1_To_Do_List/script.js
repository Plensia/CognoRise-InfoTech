const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//When Enter key is pressed
inputBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") addTask();
  });
//Add Task function
