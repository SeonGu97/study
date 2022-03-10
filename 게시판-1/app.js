'use strict';

// 엘리먼트 정보 추가
function push(name, element, type, value, text, parent, loop, boolean, event, func) {
    let gather = [];

    gather.push(
        {name, element},
        {type, value},
        {text},
        {parent},
        {loop},
        {boolean, event, func}
    );

    for(let i = 0; i < gather[4].loop; i++) {
        // create 호출
        create(gather);
    }

    // innerHTML 호출
    innerHTML(gather);
}

// 엘리먼트 생성
function create(gather) {
    gather[0].name = document.createElement(gather[0].element);

    // attrs 호출
    attrs(gather);
}

// 엘리먼트 속성 추가
function attrs(gather) {
    for(let i = 0; i < gather[1].type.length; i++) {
        gather[0].name.setAttribute(gather[1].type[i], gather[1].value[i]);
    }
}

// 엘리먼트 텍스트 추가
function innerHTML(gather) {
    gather[0].name.innerHTML = gather[2].text;

    // add 호출
    event_(gather);
}

// 엘리먼트 추가
function add(gather) {
    gather[3].parent.appendChild(gather[0].name);
}

// 엘리먼트 이벤트 추가
function event_(gather) {
    if(gather[5].boolean) {
        gather[0].name.addEventListener(gather[5].event, e => {
            gather[5].func(e);
        }, false);
        add(gather);
    }else {
        add(gather);
    }
}

// 엘리먼트 생성기로 엘리먼트 생성
const App = push('app', 'div', ['id'], ['app'], '', document.body, 1);
const wrap = push('wrap', 'div', ['class'], ['wrap'], '', app, 1);
const main = push('main', 'main', ['class'], ['main'], '', app.firstChild, 1);
const aside = push('aside', 'aside', ['class'], ['aside'], '', app.firstChild.firstChild, 1);
const library = push('library', 'ul', ['class'], ['library common'], '', app.firstChild.firstChild.firstChild, 1);
const container = push('container', 'div', ['class'], ['container'], '', app.firstChild.firstChild.firstChild, 1);
const gear = push('gear', 'span', ['class'], ['gear pointer'], '<i class="fa fa-duotone fa-gear"></i>', app.firstChild.firstChild.firstChild.childNodes[1], 1);
const plus = push('plus', 'section', ['class'], ['plus common'], '', app.firstChild.firstChild.firstChild.childNodes[1], 1);
const text_box = push('text_box', 'input', ['type', 'class', 'maxlength'], ['text', 'text-box', '10'], '', app.firstChild.firstChild.firstChild.childNodes[1].childNodes[1], 1);
const submit = push('submit', 'button', ['class'], ['submit pointer'], '추가', app.firstChild.firstChild.firstChild.childNodes[1].childNodes[1], 1);
const minus = push('minus', 'section', ['class'], ['minus common'], '', app.firstChild.firstChild.firstChild.childNodes[1], 1);
const mod = push('mod', 'button', ['class'], ['mod pointer'], 'OFF', app.firstChild.firstChild.firstChild.childNodes[1].childNodes[2], 1);
const board = push('board', 'section', ['class'], ['board'], '', app.firstChild.firstChild, 1);
const standard = push('standard', 'div', ['class'], ['standard common'], '', app.firstChild.firstChild, 1);
const exit = push('exit', 'div', ['class'], ['exit'], '', app.firstChild.firstChild.childNodes[2], 1);
const exit_btn = push('exit_btn', 'button', ['class'], ['exit-btn pointer'], '<i class="bi bi-x-lg"></i>', app.firstChild.firstChild.childNodes[2].firstChild, 1, true, 'click', exit_event);
const title_box = push('title_box', 'input', ['type', 'class', 'placeholder'], ['text', 'title-box', '제목을 입력해주세요.'], '', app.firstChild.firstChild.childNodes[2], 1);
const content_box = push('content_box', 'textarea', ['class'], ['content-box'], '', app.firstChild.firstChild.childNodes[2], 1);
const save = push('save', 'div', ['class'], ['save'], '', app.firstChild.firstChild.childNodes[2], 1);
const select_box = push('select_box', 'select', ['class'], ['select-box'], '', app.firstChild.firstChild.childNodes[2].lastChild, 1);
const save_btn = push('save_btn', 'button', ['class'], ['save-btn pointer'], '저장', app.firstChild.firstChild.childNodes[2].lastChild, 1, true, 'click', save_event);
const board_content = push('board_content', 'div', ['class'], ['board-content common'], '', app.firstChild, 1);
const exit_btn_2 = push('exit_btn_2', 'button', ['class'], ['exit-btn-2 pointer'], '<i class="bi bi-x-lg"></i>', app.firstChild.childNodes[1], 1, true, 'click', exit_event_2);
const board_content_title = push('board_content_title', 'h1', ['class'], ['board-content-title'], '', app.firstChild.childNodes[1], 1);
const board_content_content = push('board_content_content', 'div', ['class'], ['board-content-content'], '', app.firstChild.childNodes[1], 1);
const remove_content = push('remove_content', 'button', ['class'], ['remove-content pointer'], '게시물 삭제', app.firstChild.childNodes[1], 1, true, 'click', remove_content_event);

// 엘리먼트 선택
const gear_ = document.querySelector('.gear');
const plus_ = document.querySelector('.plus');
const text_box_ = document.querySelector('.text-box');
const submit_ = document.querySelector('.submit');
const minus_ = document.querySelector('.minus');
const mod_ = document.querySelector('.mod');
const library_ = document.querySelector('.library');
const board_ = document.querySelector('.board');
const standard_ = document.querySelector('.standard');
const title_box_ = document.querySelector('.title-box');
const content_box_ = document.querySelector('.content-box');
const select_box_ = document.querySelector('.select-box');
const board_content_ = document.querySelector('.board-content');
const board_content_title_ = document.querySelector('.board-content-title');
const board_content_content_ = document.querySelector('.board-content-content');

// create storage 선언
function create_storage(name, value) {
    if(localStorage.getItem(name) == null) {
        value = [];
    }else {
        value = JSON.parse(localStorage.getItem(name));
    }
    
    set_storage(name, value);
}

// set_storage 선언
function set_storage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

// storage_1 information
const name_1 = 'btn';
let value_1;

// storage_1 호출
const storage_1 = create_storage(name_1, value_1);

// gear event 선언
function gear_event(name, value) {
    gear_.addEventListener('click', e => {
        let target = e.target;
        
        target.classList.toggle('turn');

        value = JSON.parse(localStorage.getItem(name));
    
        if(target.classList.contains('turn')) {
            value.splice('hide');
            value.push('show');

            remove_class(plus_, 'hide');
            remove_class(minus_, 'hide');

            add_class(plus_, 'show');
            add_class(minus_, 'show');
        }else {
            value.splice('show');
            value.push('hide');

            remove_class(plus_, 'show');
            remove_class(minus_, 'show');

            add_class(plus_, 'hide');
            add_class(minus_, 'hide');
        }

        set_storage(name, value);
    }, false);
}

// gear_event 호출
const gear_event_ = gear_event(name_1, value_1);

// maintain_storage_1 선언
function maintain_storage_1(name, value) {
    value = JSON.parse(localStorage.getItem(name));

    if(value[0] == 'hide') {
        remove_class(gear_.firstChild, 'turn');
        remove_class(plus_, 'show');
        remove_class(minus_, 'show');

        add_class(plus_, 'hide');
        add_class(minus_, 'hide');
    }else if(value[0] == 'show') {
        add_class(gear_.firstChild, 'turn');
        add_class(plus_, 'show');
        add_class(minus_, 'show');

        remove_class(plus_, 'hide');
        remove_class(minus_, 'hide');
    }
}

// maintain_storage_1 호출
const maintain_storage_1_ = maintain_storage_1(name_1, value_1);

// add_class 선언
function add_class(element, text) {
    element.classList.add(text);
}

// remove_class 선언
function remove_class(element, text) {
    element.classList.remove(text);
}

// storage_2 information
const name_2 = 'my local';
let value_2;

// storage_1 호출
const storage_2 = create_storage(name_2, value_2);

// submit event 선언
function submit_event(name, value) {
    submit_.addEventListener('click', e => {
        if(!text_box_.value.trim()) {
            clear(text_box_);
        }else {
            add_items(name, value);

            push_value(name, value);

            if(mod_.classList.contains('mod-change')) {
                add_trash(name, value);
            }

            let name_ = text_box_.value;
            let value_;

            create_storage(name_, value_);

            clear(text_box_);
        }
    }, false);
}

// submit event 호출
const submit_event_ = submit_event(name_2, value_2);

// clear 선언
function clear(element) {
    element.value = '';
}

// add_items 선언
function add_items(name, value) {
    value = JSON.parse(localStorage.getItem(name));

    const book = push('book', 'li', ['class'], [`book ${value.length}`], '', app.firstChild.firstChild.firstChild.firstChild, 1, true, 'click', book_event);
    const word = push('word', 'a', ['class'], ['word pointer'], text_box_.value, app.firstChild.firstChild.firstChild.firstChild.lastChild, 1);
    const list = push('list', 'section', ['class'], ['list common'], '', app.firstChild.firstChild.childNodes[1], 1, true, 'click', list_event);
    const title = push('title', 'div', ['class'], ['title'], library_.lastChild.innerText, app.firstChild.firstChild.childNodes[1].lastChild, 1);
    const board_box = push('board_box', 'div', ['class'], ['board-box'], '', app.firstChild.firstChild.childNodes[1].lastChild, 1);
    const write = push('write', 'button', ['class'], ['write pointer'], '글쓰기', app.firstChild.firstChild.childNodes[1].lastChild.lastChild, 1, true, 'click', write_event);
}

// maintain_items 선언
function maintain_items(name, value) {
    value = JSON.parse(localStorage.getItem(name));

    for(let i = 0; i < value.length; i++) {
        const book = push('book', 'li', ['class'], [`book ${i}`], '', app.firstChild.firstChild.firstChild.firstChild, 1, true, 'click', book_event);
        const word = push('word', 'a', ['class'], ['word pointer'], value[i], app.firstChild.firstChild.firstChild.firstChild.childNodes[i], 1);
        const list = push('list', 'section', ['class'], ['list common'], '', app.firstChild.firstChild.childNodes[1], 1, true, 'click', list_event);
        const title = push('title', 'div', ['class'], ['title'], value[i], app.firstChild.firstChild.childNodes[1].childNodes[i], 1);
        const board_box = push('board_box', 'div', ['class'], ['board-box'], '', app.firstChild.firstChild.childNodes[1].lastChild, 1);
        const write = push('write', 'button', ['class'], ['write pointer'], '글쓰기', app.firstChild.firstChild.childNodes[1].childNodes[i], 1, true, 'click', write_event);
    }
}

// maintain_items 호출
const maintain_items_ = maintain_items(name_2, value_2);

// push_value 선언
function push_value(name, value) {
    value = JSON.parse(localStorage.getItem(name));

    value.push(text_box_.value);

    set_storage(name, value);
}

// mod_event 선언
function mod_event(name, value) {
    mod_.addEventListener('click', e => {
        mod_.classList.toggle('mod-change');

        if(mod_.classList.contains('mod-change')) {
            mod_.innerText = 'ON';
            mod_.classList.add('paint');

            add_all_trash(name, value);
        }else {
            mod_.innerText = 'OFF';
            mod_.classList.remove('paint');

            remove_all_trash(name, value);
        }
    }, false);
}

// mod_event 호출
const mod_event_ = mod_event(name_2, value_2);

// add_trash 선언
function add_trash(name, value) {
    value = JSON.parse(localStorage.getItem(name));

    const trash = push('trash', 'span', ['class'], ['trash pointer'], '<i class="bi bi-dash-circle-dotted"></i>', app.firstChild.firstChild.firstChild.firstChild.lastChild, 1, true, 'click', trash_event);
}

// add_all_trash 선언
function add_all_trash(name, value) {
    value = JSON.parse(localStorage.getItem(name));

    for(let i = 0; i < value.length; i++) {
        const trash = push('trash', 'span', ['class'], ['trash pointer'], '<i class="bi bi-dash-circle-dotted"></i>', app.firstChild.firstChild.firstChild.firstChild.childNodes[i], 1, true, 'click', trash_event);
    }
}

// remove_all_trash 선언
function remove_all_trash(name, value) {
    value = JSON.parse(localStorage.getItem(name));

    for(let i = 0; i < value.length; i++) {
        library_.childNodes[i].lastChild.remove();
    }
}

// trash_event 선언
function trash_event(e) {
    let target = e.target;

    let parent = target.parentElement.parentElement;

    parent.remove();
    
    let text = parent.firstChild.innerText;
    
    let value = JSON.parse(localStorage.getItem(name_2));
    
    remove_list(value);

    value.splice(value.indexOf(text), 1);

    set_storage(name_2, value);
}

// remove_list 선언
function remove_list(value) {
    board_.childNodes[parent.classList[1]].remove();
    
    remove_class_all(value);
}

// remove_class_all 선언
function remove_class_all(value) {
    for(let i = 0; i < value.length - 1; i++) {
        library_.classList.remove()
        library_.childNodes[i].classList.remove(library_.childNodes[i].classList.item(1));
        library_.childNodes[i].classList.add(i);
    }
}

// board first child z-index
board_.firstChild.classList.add('z');

// book_event 선언
function book_event(e) {
    let target = e.target;

    let parent = target.parentElement;

    if(parent.classList[0] == 'book') {
        let list = board_.childNodes[parent.classList[1]];

        for(let i = 0; i < board_.childNodes.length; i++) {
            board_.childNodes[i].classList.remove('z');
        }
    
        list.classList.add('z');
    }
}

// write_event 선언
function write_event(e) {
    add_class(standard_, 'down');

    create_options(name_2, value_2);
}

// exit_event 선언
function exit_event(e) {
    remove_class(standard_, 'down');
}

// save_event 선언
function save_event() {
    if(!title_box_.value.trim()) {
        clear(title_box_);
    }else {
        confirm('게시물을 저장하시겠습니까?');

        let value = JSON.parse(localStorage.getItem(select_box_.value));

        let time = new Date();
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();

        value.push(`<li class="item"><span class="num">${value.length + 1}</span><a class="item-title pointer">${title_box_.value}</a><span class="time">${y}.${m}.${d}</span><span class="content-value">${content_box_.value}</span></li>`);

        set_storage(select_box_.value, value);

        clear(title_box_);
        clear(content_box_);

        remove_class(standard_, 'down');

        remove_options();

        maintain_board_list();
    }
}

// create_options 선언
function create_options(name, value) {
    value = JSON.parse(localStorage.getItem(name));

    
    for(let i = 0; i < library_.childNodes.length; i++) {
        const options = push('option', 'option', ['class'], ['option'], value[i], app.firstChild.firstChild.childNodes[2].lastChild.firstChild, 1);
    }
}

// remove_options 선언
function remove_options() {
    for(let i = 0; i < library_.childNodes.length; i++) {
        select_box_.lastChild.remove();
    }
}

// maintain_board_list 선언
function maintain_board_list() {
    const board_box_ = document.querySelectorAll('.board-box');

    for(var i=0; i < library_.childNodes.length; i++) {
        let value = JSON.parse(localStorage.getItem(library_.childNodes[i].innerText));
        board_box_[i].innerHTML = value.toString().replace(/,/g, '');
    }
}

// maintain_board_list 호출
const maintain_board_list_ = maintain_board_list();

// list_event 선언
function list_event(e) {
    let target = e.target;

    if(target.classList[0] == 'item-title') {
        board_content_.classList.add('boom');

        let title = target.parentElement.parentElement.parentElement.firstChild.innerText;
        
        board_content_title_.innerText = target.innerText;

        let value = JSON.parse(localStorage.getItem(title));

        board_content_content_.innerText = target.parentElement.lastChild.innerText;
    }
}

// exit_event_2 선언
function exit_event_2(e) {
    board_content_.classList.remove('boom');
}

// remove_content_event 선언
function remove_content_event(e) {
    let target = e.target;

    // let value = JSON.parse(localStorage.getItem(select_box_.value));
}