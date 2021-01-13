let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let inCompleteTask = document.querySelector('#items');
let completeUL = document.querySelector('.complete-list ul');

// Create Task
let createTask = function(task) {
        let listItem = document.createElement('li');
        let checkbox = document.createElement('input');
        let label = document.createElement('label');

        label.innerText = task;
        checkbox.type = 'checkbox';

        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        return listItem;
    }
    // Add Task
let addTask = function(e) {
    e.preventDefault();
    let listItem = createTask(newTask.value);
    inCompleteTask.appendChild(listItem);
    newTask.value = '';
    bindInComplteteItems(listItem, completeTask);
}
let completeTask = function() {
    let listItem = this.parentNode;
    // create delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    // remove checkbox
    let checkbox = listItem.querySelector('input[type = "checkbox"]');
    checkbox.remove();

    // Add to the complete list
    completeUL.appendChild(listItem);

    // Remove complete Task
    bindComplteteItems(listItem, deleteTask);
}

// Delete Task
let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

// bind incomplete items
let bindInComplteteItems = function(taskItem, checkBoxClick) {
        let checkBox = taskItem.querySelector('input[type = "checkbox"]');
        checkBox.onchange = checkBoxClick;
    }
    // bind complete items
let bindComplteteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

form.addEventListener('submit', addTask);