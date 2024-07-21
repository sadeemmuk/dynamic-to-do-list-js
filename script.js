document.addEventListener('DOMContentLoaded', ()=>{
    loadTasks();
    addTask();
});

const addButton = document.getElementById('add-task-btn');

const taskInput = document.getElementById('task-input');

const taskList = document.getElementById('task-list');

function loadTasks(){
    let storedTaska = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTaska.forEach(taskText => addTask(taskText, false));
}


function addTask(taskText, save =true){
     taskText = taskInput.value.trim();
    
    if(taskText == ""){
        alert('Please Enter a task');
    }else if (taskText != ""){
        var list = document.createElement('li');
        list.textContent = taskText;
       var btn = document.createElement('button');
       btn.textContent = 'Remove';
       btn.classList.add('remove-btn');

       btn.onclick = function(){
       list.style.display = 'none';

       }
       list.appendChild(btn);
       taskList.appendChild(list);
       taskInput.value = '';
       
    }else if(save){
        let storedTaska = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTaska.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTaska));
    }
}

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress',(event)=>{
    if(event.key == 'Enter'){
        addTask();
    }
} )

