'use strict';

// 엘리먼트 정보 추가
function push(name, element, type, value, text, parent, loop) {
    let gather = [];

    gather.push(
        {name, element},
        {type, value},
        {text},
        {parent},
        {loop}
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
    add(gather);
}

// 엘리먼트 추가
function add(gather) {
    gather[3].parent.appendChild(gather[0].name);
}

// 엘리먼트 생성기로 엘리먼트 생성
const pusher = push('app', 'div', ['id'], ['app'], '', document.body, 1);
const wrap = push('wrap', 'div', ['class'], ['wrap'], '', app, 1);
const aside = push('aside', 'aside', ['class'], ['aside'], '', app.firstChild, 1);
const main = push('main', 'main', ['class'], ['main'], '', app.firstChild, 1);
const board = push('board', 'section', ['class'], ['board'], '', app.firstChild.childNodes[1], 1);
const library = push('library', 'ul', ['class'], ['library common'], '', app.firstChild.childNodes[0], 1);
const tool = push('tool', 'section', ['class'], ['tool'], '', app.firstChild.childNodes[0], 1);
const plus = push('plus', 'div', ['class'], ['plus common'], '', app.firstChild.childNodes[0].childNodes[1], 1);
const text_box = push('text_box', 'input', ['class', 'type', 'maxlength'], ['text-box', 'text', '10'], '', app.firstChild.childNodes[0].childNodes[1].firstChild, 1);
const submit = push('submit', 'button', ['class'], ['submit pointer btn'], '추가', app.firstChild.childNodes[0].childNodes[1].firstChild, 1);
const minus = push('minus', 'div', ['class'], ['minus common'], '', app.firstChild.childNodes[0].childNodes[1], 1);
const mod = push('mod', 'button', ['class'], ['mod btn pointer'], 'OFF', app.firstChild.childNodes[0].childNodes[1].childNodes[1], 1);

// 엘리먼트 선택
const text_box_ = document.querySelector('.text-box');
const submit_ = document.querySelector('.submit');
const mod_ = document.querySelector('.mod');

const name = 'my storage';
let value;

// storage 선언
function storage() {
    if(typeof(localStorage) !== undefined) {
        // storage_add 호출
        storage_add();
    }else {
        alert('로컬스토리지를 지원하지 않습니다.');
    }
}

// storage 호출
const storage_ = storage();

// storage_add 선언
function storage_add() {
    if(localStorage.getItem(name) == null) {
        value = [];
    }else {
        value = JSON.parse(localStorage.getItem(name));
    }

    // set_storage 호출
    set_storage();
}

// set_storage 선언
function set_storage() {
    localStorage.setItem(name, JSON.stringify(value));
}

// text-box 클릭 이벤트 선언
function text_box_event() {
    text_box_.addEventListener('click', e => {
        
    }, false);
}

// text-box 클릭 이벤트 호출
const text_box_event_ = text_box_event();

// submit 클릭 이벤트 선언
function submit_event() {
    submit_.addEventListener('click', e => {
        if(!text_box_.value.trim()) {
            // text_box_clear 호출
            text_box_clear();
        }else {
            // add_value 호출
            add_value();

            // set_storage 호출
            set_storage();

            // add_element 호출
            add_elements();

            // text_box_clear 호출
            text_box_clear();
        }
    }, false);
}

// submit 클릭 이벤트 호출
const submit_event_ = submit_event();

// text-box clear
function text_box_clear() {
    text_box_.value = '';
}

// add_value 선언
function add_value() {
    value.push(text_box_.value);
}

// add_elements 선언
function add_elements() {
    const book = push('book', 'li', ['class'], ['book'], '', app.firstChild.childNodes[0].firstChild, 1);
    const word = push('word', 'a', ['class'], ['word pointer'], text_box_.value, app.firstChild.childNodes[0].childNodes[0].lastChild, 1);
    const list = push('list', 'div', ['class'], ['list'], value.length, app.firstChild.childNodes[1].firstChild, 1);

    if(mod_.classList.contains('mod-change')) {
        const trash = push('trash', 'span', ['class'], ['trash pointer'], '<i class="bi bi-dash-circle"></i>', app.firstChild.childNodes[0].firstChild.lastChild, 1);
    }
}

// maintain_elements 선언
function maintain_elements() {
    for(let i = 0; i < value.length; i++) {
        const book = push('book', 'li', ['class'], ['book'], '', app.firstChild.childNodes[0].firstChild, 1);
        const word = push('word', 'a', ['class'], ['word pointer'], value[i], app.firstChild.childNodes[0].childNodes[0].childNodes[i], 1);
        const list = push('list', 'div', ['class'], ['list'], i + 1, app.firstChild.childNodes[1].firstChild, 1);
    }
}

// maintain_elements 호출
const maintain_elements_ = maintain_elements();

// mod_check 선언
function mod_check() {
    mod_.addEventListener('click', () => {
        mod_.classList.toggle('mod-change');

        if(mod_.classList.contains('mod-change')) {
            mod_.classList.add('paint');
            mod_.innerText = 'ON';

            // add_trash 호출
            add_trash();
        }else {
            mod_.classList.remove('paint');
            mod_.innerText = 'OFF';

            // remove_trash 호출
            remove_trash();
        }
    }, false);
}

// mod_check 호출
const mod_check_ = mod_check();

// add_trash 선언
function add_trash() {
    for(let i = 0; i < value.length; i++) {
        const trash = push('trash', 'span', ['class'], ['trash pointer'], '<i class="bi bi-dash-circle"></i>', app.firstChild.childNodes[0].firstChild.childNodes[i], 1);
    }
}

// remove_trash 선언
function remove_trash() {
    for(let i = 0; i < value.length; i++) {
        const book_ = document.querySelectorAll('.book');

        book_[i].removeChild(book_[i].childNodes[1]);
    }
}