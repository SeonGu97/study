'use strict';

const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector(".todo-btn");
const todoLists = document.querySelector('.todo-lists');
const allBtn = document.querySelector('.all');
const completedBtn = document.querySelector('.completed');
const uncompletedBtn = document.querySelector('.uncompleted');
const clearBtn = document.querySelector('.clear');

// event listeners
document.addEventListener("DOMContentLoaded", maintainLocal);
todoBtn.addEventListener('click', addTodo);
todoLists.addEventListener('click', todoCheck);


// functions
function addTodo(event) {
    event.preventDefault();
    // create ul
    const createUl = document.createElement('ul');
    createUl.classList.add('todo');
    
    // create li
    const createLi = document.createElement('li');
    createLi.classList.add('todo-item');
    createLi.innerText = todoInput.value;
    saveLocal(todoInput.value);
    createUl.appendChild(createLi);

    // check box
    const checkBox = document.createElement('input');
    checkBox.classList.add('todo-checkbox');
    checkBox.setAttribute('type', 'checkbox');
    createLi.appendChild(checkBox);

    // delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-delete');
    deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    createLi.appendChild(deleteBtn);
    
    // trim
    if(!todoInput.value.trim()) {
        return false;
    }

    // add ul
    todoLists.appendChild(createUl);

    // clear
    todoInput.value = '';
}

function todoCheck(a) {
    // Check the elements you clicked on.
    const target = a.target;

    // toggle : checkbox <=> checked
    if(target.classList[0] === 'todo-checkbox') {
        const parent1 = target.parentNode;
        const parent2 = target.parentNode.parentNode;
        parent1.classList.toggle('checked');
        parent2.classList.toggle('checked');
        todoLists.classList.toggle('completed');
    }
    // remove elements
    if(target.classList[0] === 'todo-delete') {
        const parent2 = target.parentNode.parentNode;
        parent2.remove();
        removeLocal(parent2); 
    }
}

function saveLocal(todo) {
    const myLocal = 'myLocal';
    let todos;
    if(localStorage.getItem(myLocal) === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem(myLocal));
    }
    
    if(!todo.trim()) {
        return false;
    }else {
        todos.push(todo);
    }
    localStorage.setItem(myLocal, JSON.stringify(todos));
};

function removeLocal(todo) {
    const myLocal = 'myLocal';
     let todos;

     if(localStorage.getItem(myLocal) === null) {
         todos = [];
     }else {
         todos = JSON.parse(localStorage.getItem(myLocal));
     }
    // 생성된 div의 자식들중의 첫번째 자식
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem(myLocal, JSON.stringify(todos)); 
}

function maintainLocal() {
    const myLocal = 'myLocal';
     let todos;

     if(localStorage.getItem(myLocal) === null) {
         todos = [];
     }else {
         todos = JSON.parse(localStorage.getItem(myLocal));
     }

    todos.forEach(todo => {
        // create ul
        const createUl = document.createElement('ul');
        createUl.classList.add('todo');
        
        // create li
        const createLi = document.createElement('li');
        createLi.classList.add('todo-item');
        createLi.innerText = todo;
        createUl.appendChild(createLi);

        // check box
        const checkBox = document.createElement('input');
        checkBox.classList.add('todo-checkbox');
        checkBox.setAttribute('type', 'checkbox');
        createLi.appendChild(checkBox);

        // delete btn
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('todo-delete');
        deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        createLi.appendChild(deleteBtn);
       
        // add ul  
        todoLists.appendChild(createUl);
    });
}