'use strict';

// variables
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoLists = document.querySelector('.todo-lists');
const checkAll = document.querySelector('.check-all');
const clearBtn = document.querySelector('.clear')
const allBtn = document.querySelector('.all');
const completedBtn = document.querySelector('.completed');
const unompletedBtn = document.querySelector('.uncompleted');
const itemlength = document.querySelector('.item-length > span');

// event listeners
todoBtn.addEventListener('click', addTodo, false);
checkAll.addEventListener('click', selectAll, false);
clearBtn.addEventListener('click', todoClear, false);
todoLists.addEventListener('click', todoCheck, false);

allBtn.addEventListener('click', showAll, false);
completedBtn.addEventListener('click', showCompleted, false);
unompletedBtn.addEventListener('click', showUncompleted, false);

// functions

// 리스트 요소를 만들어서 실제로 생성.
function addTodo(event) {
    event.preventDefault();

    // create ul (ul생성)
    const createUl = document.createElement('ul');
    createUl.classList.add('todo-ul');

    // create li (li생성)
    const createLi = document.createElement('li'); 
    createLi.classList.add('todo-li');
    createLi.innerText = todoInput.value;
    createUl.appendChild(createLi);

    // create checkbox(checkbox생성)
    const createCheckbox = document.createElement('input');
    createCheckbox.setAttribute('type', 'checkbox');
    createCheckbox.setAttribute('name', 'checkboxs');
    createCheckbox.classList.add('todo-checkbox');
    createLi.appendChild(createCheckbox);

    // create button(trash버튼 생성)
    const createBtn = document.createElement('button');
    createBtn.classList.add('todo-Btn');
    createBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    createLi.appendChild(createBtn);

    // trim (input:text에 입력 할 시 공백이 없도록 만든다.)
    if(!todoInput.value.trim()) {
        todoInput.value = '';
        return false;
    }

    // add elements (completed 버튼을 누른 상태 일때, 새로 리스트를 생성해도 미완료 리스트이기 떄문에 display = none, 이외에는 정상 적으로 생성)
    if(todoLists.classList.value === 'todo-lists compl') {
        todoLists.appendChild(createUl).style.display = 'none';
    }else {
        todoLists.appendChild(createUl).style.display = 'flex';

        // localstorage
        todoLocalStorage(todoInput.value);
        save();
    }
    
    // clear (동적으로 요소가 생성이 된 후 text를 비운다.)
    todoInput.value = '';

    // item lengths (동적으로 생성된 리스트 개수를 입력한다.)
    itemlength.innerText = todoLists.children.length;
}



// select all btn (모든 리스트들을 선택, 해제)
function selectAll() {
    // 동적으로 생성된 모든 checkbox
    const items = document.querySelectorAll('.todo-checkbox');
    // 동적으로 생성된 모든 checkbox중의 check된 checkbox
    const checkedItems = document.querySelectorAll('input:checked');
    // 이름이 checkboxs인 동적으로 생성된 모든 checkbox
    const getName = document.getElementsByName('checkboxs');

    // 동적으로 생성된 모든 checkbox 하나 하나에 함수 적용 
    getName.forEach(checkboxs => {
        // checkbox의 부모의 부모 즉, ul
        const parentUl = checkboxs.parentElement.parentElement;
        // checkbox의 부모 즉, li
        const parentLi = checkboxs.parentElement;

        // select all 버튼 클릭시 체크가 안된 리스트들은 모두 체크되고, 체크가 모두 되고 한번더 누르면 모두 체크가 해제됨
        if(items.length === checkedItems.length) {
            checkboxs.checked = false;

            // 완료된 리스트들 복구(배경,텍스트)
            parentUl.classList.remove('done');
            parentLi.classList.remove('done');
        }else {
            checkboxs.checked = true;

            // 미완료된 리스트들 완료(배경,텍스트)
            parentUl.classList.add('done');
            parentLi.classList.add('done');
        }

        // completed (completed 버튼을 누르고, select all 버튼을 누르면 체크가 안된 리스트들이 체크돼 보여지고, 모두 체크된 상태에서 한번더 누르면 모두 체크 해제돼 사라진다.)
        todoLists.classList.value === 'todo-lists compl' ? parentUl.style.display = 'flex' : '';
        todoLists.classList.value === 'todo-lists compl' ? (checkboxs.checked ? parentUl.style.display = 'flex' : parentUl.style.display = 'none') : '';

        // uncompleted (uncompleted 버튼을 누르고, select all 버튼을 누르면 체크가 된 리스트들이 체크 해제돼 보여지고, 모두 체크가 안된상태에서 한번더 누르면 모두 체크돼 사라진다.)
        todoLists.classList.value === 'todo-lists uncompl' ? parentUl.style.display = 'flex' : '';
        todoLists.classList.value === 'todo-lists uncompl' ? (checkboxs.checked ? parentUl.style.display = 'none' : parentUl.style.display = 'flex') : '';
        
        // select all 버튼을 눌렀을때 전체 선택 되면 length가 0이되고, 전체 해제가 되면 생성된 리스트의 lnegth가 입력된다.
        checkboxs.checked === true ? itemlength.innerText = itemlength.innerText = '0' : itemlength.innerText = todoLists.childNodes.length;
    });

    // select all 버튼을 눌렀을때 체크박스 체크 상태 유지
    save();
}



// clear (선택된 모든 리스트를 삭제)
function todoClear() {
    // localstorage key
    const todoCL = 'todoLC';
    // localstorage value
    let myLC;

    // todoCL 키 안에 값이 없다면, [] 입력, 있다면 문자열을 객체로 바꾸어줌.
    if(localStorage.getItem(todoCL) === null) {
        myLC = [];
    }else {
        // 문자열을 객체로 바꾸어줌.
        myLC = JSON.parse(localStorage.getItem(todoCL));
    }

    // 동적으로 생성된 모든 ul
    const todo = todoLists.children;

    for(let i = 0; i < todo.length; i++) {
        // 동적으로 생성된 모든 checkbox
        const todos = todo[i].children.item(0).children.item(0);

        if(todos.checked === true) {
            // 선택된 리스트 모두 삭제;
            todo[i].remove();
            // i와 todo.length의 값이 중간에 같아 지면서 절반만 삭제가됨 그래서 i를 초기화
            i = -1;
            itemlength.innerText = todoLists.childNodes.length;
            
            // localstorage
            const todoIndex = todos.parentElement.innerText;
            // myLC 배열 안의 todoIndex와 같은 값을 1개 삭제한다.
            myLC.splice(myLC.indexOf(todoIndex), 1);
            // 객체를 문자열로 바꾸어줌.
            localStorage.setItem(todoCL, JSON.stringify(myLC));
        }
    }

    // clear 버튼을 누르면 체크박스 체크 유무가 들어있는 로컬 스토리지 삭제(체크된 리스트만)
    removeChecked();
    // 삭제 후 로컬스토리지 갱신
    save();
}



// checkbox click event (체크박스를 클릭하면 리스트들을 선택, 해제)
function todoCheck(event) {
    event.stopPropagation();
    // 클릭시 타켓 선택
    const target = event.target;
    // 타켓의 부모의 부모 요소
    const parentUl = target.parentElement.parentElement;
    //  타켓의 부모 요소
    const parentLi = target.parentElement;
    // select all name:checkboxs (이름이 checkboxs인 요소 모두)
    const getName = document.getElementsByName('checkboxs');
    // items length (동적으로 생성된 모든 ul의 개수)
    const itemsLength = todoLists.childNodes.length;

    // 체크박스 체크/체크해제 시 임이의 클래스 추가/삭제 (배경,텍스트 변경 됨)
    if(target.checked === true) { 
        parentUl.classList.add('done');
        parentLi.classList.add('done');
        itemlength.innerText = itemsLength;
    }else if(target.checked === false){
        parentUl.classList.remove('done');
        parentLi.classList.remove('done');
        itemlength.innerText = itemsLength;
    }

    // completed, uncompleted
     getName.forEach(checkboxs => {
        // 클릭된 타켓의 부모의 부모요소
        const parentUl = checkboxs.parentElement.parentElement;
        // 동적으로 생성된 모든 checkbox중의 check된 checkbox
        const checkedItems = document.querySelectorAll('input:checked');

        // completed 버튼을 눌렀을시 완료(체크)된 리스트들만 보이는데, 그 리스트들 다시 체크를 해제해서 미완료 상태로 만들면 display = none이 된다.
        if(todoLists.classList.value === 'todo-lists compl') {
            checkboxs.checked ? parentUl.style.display = 'flex' : parentUl.style.display = 'none';
        }

        // uncompleted 버튼을 눌렀을시 미완료(체크 안)된 리스트들만 보이는데, 그 리스트들 다시 체크해서 완료 상태로 만들면 display = none이 된다.
        if(todoLists.classList.value === 'todo-lists uncompl') {
            checkboxs.checked ? parentUl.style.display = 'none' : parentUl.style.display = 'flex';
        }

        // When checked, the number of items decreases (체크되면 아이템 개수가 마이너스 된다.)
        todoLists.childNodes.length <= checkedItems.length ? itemlength.innerText = '0' : itemlength.innerText = todoLists.childNodes.length - checkedItems.length;
    
        checkboxs.addEventListener('change', save);
    });

    // trash Btn (리스트중 체크된 리스트의 trash버튼을 누르면 요소가 삭제된다.)
    if(target.classList[0] === 'todo-Btn') {
        // 리스트 삭제
        parentUl.classList.contains('done') ? target.parentElement.parentElement.remove() : '';
        // 로컬 삭제
        parentUl.classList.contains('done') ? removeLC(parentUl) : '';
        // 체크박스 로컬 삭제
        parentUl.classList.contains('done') ? removeChecked() : '';
        // 체크박스 로컬 갱신
        parentUl.classList.contains('done') ? save() : '';
    }
}



// 모든 리스트들의 display가 flex된다.(all 버튼)
function showAll() { 
    // 동적으로 생성된 모든 ul
    const childUl = todoLists.children;
    // 이름이 checkboxs인 동적으로 생성된 모든 checkbox
    const getName = document.getElementsByName('checkboxs');
    
    // all버튼을 누르면 모든 리스트들이 flex되어 보여진다.
    for(let i = 0; i < getName.length; i++) {
        if(getName[i].checked) {
            childUl[i].style.display = 'flex';
        }else {
            childUl[i].style.display = 'flex';
        }
    }

    // class 추가,삭제
    todoLists.classList.add('allcheck');
    todoLists.classList.remove('compl');
    todoLists.classList.remove('uncompl');
}



// 완료한 리스트들은 display가 flex되고, 미완료된 리스트들은 display가 none된다. (completed 버튼)
function showCompleted() {
    // 동적으로 생성된 모든 ul
    const childUl = todoLists.children;
    // 이름이 checkboxs인 동적으로 생성된 모든 checkbox
    const getName = document.getElementsByName('checkboxs');

    // completed 버튼을 눌렀을때 완료(체크)된 리스트만 보여진다.
    for(let i = 0; i < getName.length; i++) {
        if(getName[i].checked === true) {
            childUl[i].style.display = 'flex';
        }else if(getName[i].checked === false) {
            childUl[i].style.display = 'none';
        }
    }

    // class 추가,삭제
    todoLists.classList.add('compl');
    todoLists.classList.remove('uncompl');
    todoLists.classList.remove('allcheck');
}



// 미완료된 리스트들은 display가 flex되고, 완료된 리스트들은 display가 none된다. (uncompleted 버튼)
function showUncompleted() {
    // 동적으로 생성된 모든 ul
    const childUl = todoLists.children;
    // 이름이 checkboxs인 동적으로 생성된 모든 checkbox
    const getName = document.getElementsByName('checkboxs');

    // uncompleted 버튼을 눌렀을때 미완료(미체크)된 리스트만 보여진다.
    for(let i = 0; i < getName.length; i++) {
        if(getName[i].checked) {
            childUl[i].style.display = 'none';
        }else {
            childUl[i].style.display = 'flex';
        }
    }

    // class 추가,삭제
    todoLists.classList.add('uncompl');
    todoLists.classList.remove('compl');
    todoLists.classList.remove('allcheck');
}
  


// items length, 만약 리스트가 0개 라면 0이 입력이 된다.
if(todoLists.childNodes.length === 0) {
    itemlength.innerText = '0';
}



// 로컬 생성
function todoLocalStorage(todo) {
    // localstorage key
    const todoCL = 'todoLC';
    // localstorage value
    let myLC;

    // todoCL 키 안에 값이 없다면, [] 입력, 있다면 문자열을 객체로 바꾸어줌.
    if(localStorage.getItem(todoCL) === null) {
        myLC = [];
    }else {
        // 문자열을 객체로 바꾸어줌.
        myLC = JSON.parse(localStorage.getItem(todoCL));
        // 배열 안에 todo값을 넣음.
        myLC.push(todo);
    }
    // 객체를 문자열로 바꾸어줌.
    localStorage.setItem(todoCL, JSON.stringify(myLC));
}



// 웹을 새로고침 하거나 껐다가 켜도 이전에 생성한 리스트 유지
function maintainLC() {
    // localstorage key
    const todoCL = 'todoLC';
    // localstorage value
    let myLC;

    // todoCL 키 안에 값이 없다면, [] 입력, 있다면 문자열을 객체로 바꾸어줌.
    if(localStorage.getItem(todoCL) === null) {
        myLC = [];
    }else {
        // 문자열을 객체로 바꾸어줌.
        myLC = JSON.parse(localStorage.getItem(todoCL));
    }
    // 객체를 문자열로 바꾸어줌.
    localStorage.setItem(todoCL, JSON.stringify(myLC));

    //

    // myLC 배열 안의 값 하나하나에게 함수 적용.
    myLC.forEach(todos => {
        // create ul (ul생성)
        const createUl = document.createElement('ul');
        createUl.classList.add('todo-ul');
    
        // create li (li생성)
        const createLi = document.createElement('li'); 
        createLi.classList.add('todo-li');
        createLi.innerText = todos;
        createUl.appendChild(createLi);
    
        // create checkbox(checkbox생성)
        const createCheckbox = document.createElement('input');
        createCheckbox.setAttribute('type', 'checkbox');
        createCheckbox.setAttribute('name', 'checkboxs');
        createCheckbox.classList.add('todo-checkbox');
        createLi.appendChild(createCheckbox);
    
        // create button(trash버튼 생성)
        const createBtn = document.createElement('button');
        createBtn.classList.add('todo-Btn');
        createBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        createLi.appendChild(createBtn);
        
        // 완성된 리스트 생성
        todoLists.appendChild(createUl);
    });
        // item lengths (동적으로 생성된 리스트 개수를 입력한다.)
        itemlength.innerText = myLC.length;

        // 생성된 리스트가 유지될때, 체크박스의 상태도 같이 유지됨.
        maintainCheckbox();
}
// 함수 실행
const maintain = maintainLC();



// 로컬 삭제
function removeLC(todo) {
    // localstorage key
    const todoCL = 'todoLC';
    // localstorage value
    let myLC;

    // todoCL 키 안에 값이 없다면, [] 입력, 있다면 문자열을 객체로 바꾸어줌.
    if(localStorage.getItem(todoCL) === null) {
        myLC = [];
    }else {
        // 문자열을 객체로 바꾸어줌.
        myLC = JSON.parse(localStorage.getItem(todoCL));
    }

    // li 안의 text
    const todoIndex = todo.children[0].innerText;
    // myLC 배열 안의 todoIndex와 같은 값을 1개 삭제한다.
    myLC.splice(myLC.indexOf(todoIndex), 1);
    // 객체를 문자열로 바꾸어줌.
    localStorage.setItem(todoCL, JSON.stringify(myLC));
}



// 로컬스토리지에 리스트들의 체크박스 체크 여부 저장
function save() {   
    // localstorage value 
    let LCcheck;
    // 이름이 checkboxs인 동적으로 생성된 모든 checkbox
    const getName = document.getElementsByName('checkboxs');

    // todoCL 키 안에 값이 없다면, [] 입력, 있다면 문자열을 객체로 바꾸어줌.
    if(localStorage.getItem('checkLC') === null) {
        LCcheck = [];
    }else {
        // 문자열을 객체로 바꾸어줌.
        LCcheck = JSON.parse(localStorage.getItem('checkLC'));
    }
    for(let i=0; i<getName.length; i++){
        // 로컬스토리지 안에 체크박스의 체크 유무를 넣음.
        LCcheck[i] = getName[i].checked;          
    }

    // 객체를 문자열로 바꾸어줌.
    localStorage.setItem('checkLC', JSON.stringify(LCcheck));
}




// 체크박스의 체크 상태 유지
function maintainCheckbox() {
    // localstorage value
    let LCcheck;
    // 이름이 checkboxs인 동적으로 생성된 모든 checkbox
    const getName = document.getElementsByName('checkboxs');

    // todoCL 키 안에 값이 없다면, [] 입력, 있다면 문자열을 객체로 바꾸어줌.
    if(localStorage.getItem('checkLC') === null) {
        LCcheck = [];
    }else {
        // 문자열을 객체로 바꾸어줌.
        LCcheck = JSON.parse(localStorage.getItem('checkLC'));
    }


    if(LCcheck){
        for(let i=0; i<getName.length; i++){
            // 체크박스가 체크 되있다면 체크 유지
            if(LCcheck[i]) {
                getName[i].checked = true;
            }

            // 체크된 체크박스가 새로고침, 웹을 껐다가 켜도 스타일이 유지됨.
            if(getName[i].checked === true) {
                getName[i].parentElement.parentElement.classList.add('done');
                getName[i].parentElement.classList.add('done');
            }
        }
    }
}
 


// 체크박스가 체크돼있다면 로컬스토리지도 삭제가능.
function removeChecked() {
    // localstorage value
    let LCcheck;

    // todoCL 키 안에 값이 없다면, [] 입력, 있다면 문자열을 객체로 바꾸어줌.
    if(localStorage.getItem('checkLC') === null) {
        LCcheck = [];
    }else {
        // 문자열을 객체로 바꾸어줌.
        LCcheck = JSON.parse(localStorage.getItem('checkLC'));
    }

    // 체크박스가 true인 리스트만 로컬에서 삭제
    LCcheck.splice(true[0]);
    // 객체를 문자열로 바꾸어줌.
    localStorage.setItem('checkLC', JSON.stringify(LCcheck));
}

