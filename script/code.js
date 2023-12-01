document.addEventListener('DOMContentLoaded', function() {
    const sortButton = document.getElementById('sortbtn');
    const addTaskButton = document.getElementById('addbtn');
    const taskInput = document.getElementById('todo-input');
    const taskList = document.getElementById('taskList');
    
    sortButton.addEventListener('click', function() {
      // Sort the tasks in the list
      const tasks = Array.from(taskList.children);
      tasks.sort((a, b) => a.innerText > b.innerText ? 1 : -1);
      taskList.innerHTML = "";
      tasks.forEach(task => taskList.appendChild(task));
    });
      // add the tasks to the list
    addTaskButton.addEventListener('click', function() {
      const taskText = taskInput.value;
      if (taskText.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }else {
        alert('Please enter a task!');
    }
});
});

