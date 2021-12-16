 'use strict';

// select elements
const submitBtn = document.querySelector('.submit');
const todolist = document.querySelector('.todolist');
const todoText = document.querySelector('.text');
const selectAll = document.querySelector('.select-all');
const clear = document.querySelector('.clear');
const container = document.querySelector('.container');
const itemsLength = document.querySelector('.items');


// event listeners
submitBtn.addEventListener('click', createList);
todolist.addEventListener('click', todoClick);
selectAll.addEventListener('click', todoSelectAll);
clear.addEventListener('click', todoClear);
container.addEventListener('click', optionBtn);


// functions
// create list (리스트 생성.)
function createList(evnet) {
    // 고유의 동작 중단.
    evnet.preventDefault();

    // create ul
    const createUl = document.createElement('ul');
    // class 추가.
    createUl.classList.add('todo-ul');

    // create li
    const createLi = document.createElement('li');
    // class 추가.
    createLi.classList.add('todo-li');
    // li 안에 input:text의 value를 추가.
    createLi.innerText = todoText.value;
    // ul 안에 li 추가.
    createUl.appendChild(createLi);

    // create checkbox
    const createCheckbox = document.createElement('input');
    // class 추가.
    createCheckbox.classList.add('todo-checkbox');

    createCheckbox.setAttribute('type', 'checkbox');
    // li 안에 checkbox 추가.
    createLi.appendChild(createCheckbox);

    // create trash btn
    const createTrashBtn = document.createElement('button');
    // class 추가.
    createTrashBtn.classList.add('todo-trash-btn');
    // trash btn 안에 아이콘 추가.
    createTrashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // li 안에 trash btn 추가.
    createLi.appendChild(createTrashBtn);

    // 만약 공백이 있다면 return, 없다면 리스트 생성, 함수 실행.
    if(!todoText.value.trim()) {
        // clear
        todoText.value = '';
        return;
    }else {
        // localstorage key
        const key3 = 'todos3';
        // localstorage value
        let value3;
        // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
        if(localStorage.getItem(key3) === null) {
            value3 = [];
        }else {
            value3 = JSON.parse(localStorage.getItem(key3));
        };

        // add ul
        value3[0] === 'completed' ?  todolist.appendChild(createUl).style.display = 'none' : todolist.appendChild(createUl);
        // todoLocalstorage
        todoLocalstorage(todoText.value, createCheckbox.checked);
        // clear
        todoText.value = '';
    };

    // items length
    optionBtnStyle();
};



// create localstorage (로컬스토리지 생성.)
function todoLocalstorage(todo1, todo2) {
    // localstorage key
    const key1 = 'todos1';
    // localstorage value
    let value1;
    // 만약 localstorage에 key1가 없다면 value1 = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key1) === null) {
        value1 = [];
    }else {
        value1 = JSON.parse(localStorage.getItem(key1));
        value1.push(todo1);
    };
    
    // localstorage에 key1라는 이름을 가진 key의 value를 javascript 객체언어에서 json 문자어로 반환. (javascript -> json)
    localStorage.setItem(key1, JSON.stringify(value1));


    
    // localstorage key
    const key2 = 'todos2';
    // localstorage value
    let value2;
    // 만약 localstorage에 key2가 없다면 value1 = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key2) === null) {
        value2 = [];
    }else {
        value2 = JSON.parse(localStorage.getItem(key2));
        value2.push(todo2);
    };

    // localstorage에 key2라는 이름을 가진 key의 value를 javascript 객체언어에서 json 문자어로 반환. (javascript -> json)
    localStorage.setItem(key2, JSON.stringify(value2));
};



// maintain lists (생성된 리스트 상태 유지.)
function maintain() {
    // localstorage key
    const key1 = 'todos1';
    // localstorage value
    let value1;
    // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key1) === null) {
        value1 = [];
    }else {
        value1 = JSON.parse(localStorage.getItem(key1));
    };

    // localstorage에 입력된 value가 존재하면 value 모두에게 아래의 함수 적용.
    value1.forEach(value1 => {
        // create ul
        const createUl = document.createElement('ul');
        // class 추가.
        createUl.classList.add('todo-ul');

        // create li
        const createLi = document.createElement('li');
        // class 추가.
        createLi.classList.add('todo-li');
        // li 안에 input:text의 value1를 추가.
        createLi.innerText = value1;
        // ul 안에 li 추가.
        createUl.appendChild(createLi);

        // create checkbox
        const createCheckbox = document.createElement('input');
        // class 추가.
        createCheckbox.classList.add('todo-checkbox');

        createCheckbox.setAttribute('type', 'checkbox');
        // li 안에 checkbox 추가.
        createLi.appendChild(createCheckbox);

        // create trash btn
        const createTrashBtn = document.createElement('button');
        // class 추가.
        createTrashBtn.classList.add('todo-trash-btn');
        // trash btn 안에 아이콘 추가.
        createTrashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        // li 안에 trash btn 추가.
        createLi.appendChild(createTrashBtn);

        // add ul
        todolist.appendChild(createUl);
    });

    // localstorage에 key1라는 이름을 가진 key의 value를 javascript 객체언어에서 json 문자어로 반환. (javascript -> json)
    localStorage.setItem(key1, JSON.stringify(value1));



    // localstorage key
    const key2 = 'todos2';
    // localstorage value
    let value2;
    // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key2) === null) {
        value2 = [];
    }else {
        value2 = JSON.parse(localStorage.getItem(key2));
    };

    // select all checkbox
    const items = document.querySelectorAll('.todo-checkbox');
    // 만약 value2가 true라면.
    if(value2) {
        for(let i = 0; i < items.length; i++) {
            // 만약 value2의 배열이 true라면, 체크박스도 true가 된다.
            if(value2[i]) {
                items[i].checked = true;
            };
        };
    };

    // localstorage에 key2라는 이름을 가진 key의 value를 javascript 객체언어에서 json 문자어로 반환. (javascript -> json)
    localStorage.setItem(key2, JSON.stringify(value2));



    // localstorage key
    const key3 = 'todos3';
    // localstorage value
    let value3;
    // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key3) === null) {
        value3 = [];
    }else {
        value3 = JSON.parse(localStorage.getItem(key3));
    };

    if(value3 == '') {
        value3.push('all');
    }

    listDisplay();

    // localstorage에 key3라는 이름을 가진 key의 value를 javascript 객체언어에서 json 문자어로 반환. (javascript -> json)
    localStorage.setItem(key3, JSON.stringify(value3));



    // items style
    listStyle();
    // option btns
    optionBtnStyle();
}
// 함수 실행.
const maintenance = maintain();



// lists click event
function todoClick(event) {
    // target
    const target = event.target;
    // 체크박스의 체크 상태가 변경 될 때 마다 함수 실행.
    target.addEventListener('change', checkboxChanged);



    // trash btn
    trash();
    // list display
    listDisplay();
    // list style
    listStyle();
};



// trash btn
function trash() {
        // select all trash btn
        const trashBtn = document.querySelectorAll('.todo-trash-btn');
        // event listener
        trashBtn.forEach(trash => {
            trash.addEventListener('click', removeElement);
        });



        // items length
        optionBtnStyle();
}
// 함수 실행.
const trashBtn = trash();



// 체크박스의 체크 상태가 변경 될 때 마다 localstorage value2의 value 갱신.
function checkboxChanged() {
    // localstorage key
    const key2 = 'todos2';
    // localstorage value
    let value2;
    // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key2) === null) {
        value2 = [];
    }else {
        value2 = JSON.parse(localStorage.getItem(key2));
    };
    
    // select all checkbox
    const items = document.querySelectorAll('.todo-checkbox');

    // 체크박스의 체크 여부 갱신.
    for(let i = 0; i < items.length; i++) {
        value2[i] = items[i].checked;
    };

    // localstorage에 key2라는 이름을 가진 key의 value를 javascript 객체언어에서 json 문자어로 반환. (javascript -> json)
    localStorage.setItem(key2, JSON.stringify(value2));
};



// 리스트, 로컬스토리지 삭제.
function removeElement(event) {
    // target
    const target = event.target;

    // target이 만약 trash btn 이라면.
    if(target.classList[0] === 'todo-trash-btn') {
        // checkbox가 true일때, trash btn을 누르면 해당 리스트 삭제.
        target.parentElement.children.item(0).checked ? removeTodos1(target) : '';
        // 삭제되는 리스트의 localstorage key2 값도 같이 삭제됨.
        target.parentElement.children.item(0).checked ? removeTodos2() : '';
        // localstorage key2 갱신. (removeTodos2()를 실행하면 localstorage key2가 초기화됨.)
        target.parentElement.children.item(0).checked ? checkboxChanged() : '';
    };
};



// localstorage의 key1 value를 삭제한다.
function removeTodos1(target) {
    // remove Element
    target.parentElement.parentElement.remove();

    // localstorage key
    const key1 = 'todos1';
    // localstorage value
    let value1;
    // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key1) === null) {
        value1 = [];
    }else {
        value1 = JSON.parse(localStorage.getItem(key1));
    };

    // li 안에 작성된 text
    const todoText = target.parentElement.innerText;

    // 클릭한 li의 text와 value 삭제.
    value1.splice(value1.indexOf(todoText), 1);

    // localstorage에 key1라는 이름을 가진 key의 value를 javascript 객체언어에서 json 문자어로 반환. (javascript -> json)
    localStorage.setItem(key1, JSON.stringify(value1));
};



// localstorage의 key2 value를 삭제한다.
function removeTodos2() {
    // localstorage key
    const key2 = 'todos2';
    // localstorage value
    let value2;
    // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key2) === null) {
        value2 = [];
    }else {
        value2 = JSON.parse(localStorage.getItem(key2));
    };

    // 클릭된 리스트 checkbox의 checked가 들어있는 localstorage value 삭제.
    value2.splice(true[0]);

    // localstorage에 key2라는 이름을 가진 key의 value를 javascript 객체언어에서 json 문자어로 반환. (javascript -> json)
    localStorage.setItem(key2, JSON.stringify(value2));
};



// select all btn을 누루면 리스트가 모두 선택/해제 된다.
function todoSelectAll() {
    // select all checkbox
    const items = document.querySelectorAll('.todo-checkbox');
    // select all checkbox.checked
    const checked = document.querySelectorAll('.todo-checkbox:checked');

    // 만약 checkbox의 개수와 checkbox.checked 개수가 같다면 체크박스 모두 해제, 같지 않다면 체크박스 모두 체크.
    items.forEach(checkboxs => {
        if(items.length === checked.length) {
            checkboxs.checked = false;
            // localstorage key2 갱신.
            checkboxChanged();
        }else {
            checkboxs.checked = true;
            // localstorage key2 갱신.
            checkboxChanged(); 
        };
    });



    // lsit display
    listDisplay();
    // list style
    listStyle();
    // items length
    optionBtnStyle()
};



// clear (체크된 모든 리스트, 로컬스토리지 삭제.)
function todoClear() {
    // localstorage key
    const key1 = 'todos1';
    // localstorage value
    let value1;
    // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key1) === null) {
        value1 = [];
    }else {
        value1 = JSON.parse(localStorage.getItem(key1));
    };



    // localstorage key
    const key2 = 'todos2';
    // localstorage value
    let value2;
    // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key2) === null) {
        value2 = [];
    }else {
        value2 = JSON.parse(localStorage.getItem(key2));
    };



    // select all checkbox
    const items = document.querySelectorAll('.todo-checkbox');
    // 체크박스가 체크된 모든 리스트 삭제. (로컬스토리지도 같이 삭제.)
    for(let i = 0; i < items.length; i++) {
        // 만약 체크박스가 체크 되었다면.
        if(items[i].checked) {
            // todo-ul 제거.
            items[i].parentElement.parentElement.remove();
            // 체크된 리스트의 localstorage key1 모두 삭제.
            value1.splice(value1.indexOf(items[i].parentElement.innerText), 1);
            // 체크된 리스트의 localstorage key2 모두 삭제.
            value2.splice(true[0]);

            // localstorage에 key1라는 이름을 가진 key의 value를 javascript 객체언어에서 json 문자어로 반환. (javascript -> json)
            localStorage.setItem(key1, JSON.stringify(value1));
            // localstorage에 key2라는 이름을 가진 key의 value를 javascript 객체언어에서 json 문자어로 반환. (javascript -> json)
            localStorage.setItem(key2, JSON.stringify(value2));
        };
    };



    // localstorage key2 갱신.
    checkboxChanged();
};



// option 버튼에 따른 리스트 style display를 설정하고, localstorage도 변경한다.
function optionBtn(event) {
    // target
    const target = event.target;

    // localstorage key
    const key3 = 'todos3';
    // localstorage value
    let value3;
    // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key3) === null) {
        value3 = [];
    }else {
        value3 = JSON.parse(localStorage.getItem(key3));
    };

    // select all checkbox
    const items = document.querySelectorAll('.todo-checkbox');

    // option btns
    items.forEach(checkboxs => {
        // 만약 target이 'all'라면 모든 리스트 스타일을 block하고, value3를 초기화 후 'all'추가.
        if(target.classList[0] === 'all') {
            checkboxs.checked ? checkboxs.parentElement.parentElement.style.display = 'block' : checkboxs.parentElement.parentElement.style.display = 'block';
        }
        
        // 만약 target이 'completed'라면 체크된 리스트 스타일을 block, 체크가 안된 리스트 스타일을 none하고, value3를 초기화 후 'completed'추가.
        if(target.classList[0] === 'completed') {
            checkboxs.checked ? checkboxs.parentElement.parentElement.style.display = 'block' : checkboxs.parentElement.parentElement.style.display = 'none';
        }
        
        // 만약 target이 'uncompleted'라면 체크된 리스트 스타일을 none, 체크가 안된 리스트 스타일을 block하고, value3를 초기화 후 'uncompleted'추가.
        if(target.classList[0] === 'uncompleted') {
            checkboxs.checked ? checkboxs.parentElement.parentElement.style.display = 'none' : checkboxs.parentElement.parentElement.style.display = 'block';
        }
    });

    // 만약 target이 'all'라면 value3를 초기화 후 'all'추가.
    if(target.classList[0] === 'all') {
        value3.splice(0, value3.length);
        value3.push(target.classList[0]);
    }
    
    // 만약 target이 'completed'라면 value3를 초기화 후 'completed'추가.
    if(target.classList[0] === 'completed') {
        value3.splice(0, value3.length);
        value3.push(target.classList[0]);
    }
    
    // 만약 target이 'uncompleted'라면 value3를 초기화 후 'uncompleted'추가.
    if(target.classList[0] === 'uncompleted') {
        value3.splice(0, value3.length);
        value3.push(target.classList[0]);
    }

    // 만약 target이 'clear'라면 items length 추가..
    if(target.classList[0] === 'clear') {
        // items length
        itemsLength.innerText = items.length + ' ' +'left';
    }

    // localstorage에 key3라는 이름을 가진 key의 value를 javascript 객체언어에서 json 문자어로 반환. (javascript -> json)
    localStorage.setItem(key3, JSON.stringify(value3));



    // items style
    optionBtnStyle();
};



// list display (option 버튼에 따른 리스트 style display를 설정한다.)
function listDisplay() {
     // localstorage key
    const key3 = 'todos3';
    // localstorage value
    let value3;
    // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key3) === null) {
        value3 = [];
    }else {
        value3 = JSON.parse(localStorage.getItem(key3));
    };

    // select all checkbox
    const items = document.querySelectorAll('.todo-checkbox');

    // option btns.
    items.forEach(checkboxs => {
        // value3에 값이 'all'이라면, 모든 리스트 스타일 block.
        if(value3[0] === 'all') {
            checkboxs.checked ? checkboxs.parentElement.parentElement.style.display = 'block' : checkboxs.parentElement.parentElement.style.display = 'block';
        }

        // value3에 값이 'completed'이라면, 체크된 리스트 스타일 block, 체크 안된 리스트 스타일 none.
        if(value3[0] === 'completed') {
            checkboxs.checked ? checkboxs.parentElement.parentElement.style.display = 'block' : checkboxs.parentElement.parentElement.style.display = 'none';
        }

        // value3에 값이 'uncompleted' 이라면, 체크된 리스트 스타일 none, 체크 안된 리스트 스타일 block.
        if(value3[0] === 'uncompleted') {
            checkboxs.checked ? checkboxs.parentElement.parentElement.style.display = 'none' : checkboxs.parentElement.parentElement.style.display = 'block';
        }
    });
}



// list style
function listStyle() {
    // select all checkbox
    const items = document.querySelectorAll('.todo-checkbox');

    // 만약 리스트의 checkbox가 true라면 calss추가, false라면 class삭제.
    items.forEach(checkbox => {
        if(checkbox.checked) {
            checkbox.parentElement.classList.add('active');
        }else {
            checkbox.parentElement.classList.remove('active');
        }
    });
}



// option btns style, items length
function optionBtnStyle() {
    // localstorage key
    const key3 = 'todos3';
    // localstorage value
    let value3;
    // 만약 localstorage에 key가 없다면 value = {}, 있다면 json 문자열을 javascript 객체로 반환.
    if(localStorage.getItem(key3) === null) {
        value3 = [];
    }else {
        value3 = JSON.parse(localStorage.getItem(key3));
    };

    // option btns
    const allBtn = document.querySelector('.all');
    const completedBtn = document.querySelector('.completed');
    const uncompletedBtn = document.querySelector('.uncompleted');

    // select all checkbox
    const items = document.querySelectorAll('.todo-checkbox');
    // select all checkbox.checked
    const checked = document.querySelectorAll('.todo-checkbox:checked');

    // value3의 value가 'all' 이라면, All버튼의 스타일을 바꾸고, itemsLengt 안에 생성된 모든 리스트의 개수를 입력한다.
    if(value3[0] === 'all') {
        allBtn.style.background = '#bdbdbd';
        itemsLength.innerText = items.length + ' ' + 'left';;
    }else {
        allBtn.style.background = '';
    };

    // value3의 value가 'completed' 이라면, Completed버튼의 스타일을 바꾸고, itemsLengt 안에 체크된 모든 리스트의 개수를 입력한다.
    if(value3[0] === 'completed') {
        completedBtn.style.background = '#bdbdbd';
        itemsLength.innerText = checked.length + ' ' + 'left';
    }else {
        completedBtn.style.background = '';
    };

    // value3의 value가 'uncompleted' 이라면, Uncompleted버튼의 스타일을 바꾸고, itemsLengt 안에 체크가 안된 모든 리스트의 개수를 입력한다.
    if(value3[0] === 'uncompleted') {
        uncompletedBtn.style.background = '#bdbdbd';
        itemsLength.innerText = items.length - checked.length + ' ' + 'left';
    }else {
        uncompletedBtn.style.background = '';
    };
};