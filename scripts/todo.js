const taskList = document.getElementById("taskWrapper");
const taskInput = document.getElementById("taskInputText");
const addTaskButton = document.getElementById("addTask");
const itemTemplate = document.getElementById("taskContainerTemplate");

var tasks = [];



addTaskButton.onclick = ()=> {
    console.log(taskInput.value);
    addNewTaskToList(taskInput.value)
    taskInput.value = '';
}

taskInput.addEventListener("keydown", (key)=> {
    if (key.key === "Enter" && document.activeElement === taskInput) {
        addNewTaskToList(taskInput.value);
        taskInput.value = '';
    }
})


function addNewTaskToList(taskDescription, isInit) {
    if (taskDescription === null || taskDescription === "") { return };

    let newTask = document.createElement("div");
    newTask.className = "listItem";
    newTask.innerHTML = `<input type="checkbox" style="margin-right: 20px"> ${taskDescription}`;
    taskList.appendChild(newTask);
    tasks.push(newTask);
    console.log(tasks);
    if (!isInit) {saveTasks()};
    
}

function clearCompletedTasks() {
    if (tasks.length === 0) {return};

    for (var i=0; i <tasks.length; i++) {
        if (tasks[i].getElementsByTagName('input')[0].checked) {
            tasks[i].style = "background-color: green";
            taskList.removeChild(tasks[i]);
            tasks.splice(i,1);
            saveTasks();
        }
    }
}


setInterval(() => {
    clearCompletedTasks();
}, 1000);



function saveTasks() {
    if (tasks.length === 0) {localStorage.clear()};
    localStorage.setItem('taskCount', tasks.length);
    for (var i=0; i <tasks.length; i++) {
        localStorage.setItem(i, tasks[i].textContent);
    }
    console.log("Saved!");
}

window.addEventListener("load", (event) => {
    if (localStorage.getItem(0) !== null) {
        for (var i=0; i<localStorage.getItem('taskCount'); i++) {
            console.log(localStorage.getItem(i));
            addNewTaskToList(localStorage.getItem(i), true);
        }
    }
  });
  