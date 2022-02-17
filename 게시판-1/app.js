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
const library_ = document.querySelector('.library');

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

// num
let num = 0;

// add_book 선언
function add_book() {
    submit_.addEventListener('click', e => {
        if(!text_box_.value.trim()) {
            // clear 호출
            clear();
        }else {
            // add_value 호출
            add_value();

            // create_items 호출
            create_items();

            // clear 호출
            clear();

            // trash_event 호출
            trash_event();

            if(mod_.classList.contains('mod-change')) {
                // remove_trash_ 호출
                remove_trash_();
                // add_trash 호출
                add_trash();
            }
        }
    }, false);
}

// add_book 호출
const add_book_ = add_book();

// create_items 선언
function create_items() {
    const book = push('book', 'li', ['class'], ['book'], '', app.firstChild.childNodes[0].firstChild, 1);
    const word = push('word', 'a', ['class'], ['word pointer'], text_box_.value, app.firstChild.childNodes[0].firstChild.lastChild, 1);
}

// clear 선언
function clear() {
    text_box_.value = '';
}

// add_value 선언
function add_value() {
    value.push(text_box_.value);

    // set_storage 호출
    set_storage();
}

// maintain_items 선언
function maintain_items() {
    for(let i = 0; i < value.length; i++) {
        const book = push('book', 'li', ['class'], ['book'], '', app.firstChild.childNodes[0].firstChild, 1);
        const word = push('word', 'a', ['class'], ['word pointer'], value[i], app.firstChild.childNodes[0].firstChild.lastChild, 1);
    }
}

// maintain_items 호출
const maintain_items_ = maintain_items();

function trash_event() {
    for(let i = 0; i < value.length; i++) {
        const book_ = document.querySelectorAll('.book');

        book_[i].addEventListener('click', e => {
            console.log(true);
        }, false);
    }
}

trash_event()

// mod_change
function mod_change() {
    mod_.addEventListener('click', e => {
        mod_.classList.toggle('mod-change');

        if(mod_.classList.contains('mod-change')) {
            add_class(mod_, 'paint');
            change_text(mod_, 'ON');
            add_trash();
        }else {
            remove_class(mod_, 'paint');
            change_text(mod_, 'OFF');
            remove_trash();
        }
    }, false);
}

const mod_change_ = mod_change();

function add_class(element, text) {
    element.classList.add(text);
}

function remove_class(element, text) {
    element.classList.remove(text);
}

function change_text(element, text) {
    element.innerText = text;
}

function add_trash() {
    for(let i = 0; i < value.length; i++) {
        const trash = push('trash', 'span', ['class'], ['trash pointer'], '<i class="bi bi-dash-circle-dotted"></i>',app.firstChild.childNodes[0].firstChild.childNodes[i], 1);
    }
}

function remove_trash() {
    mod_.classList.remove('mod-change');

    for(let i = 0; i < value.length; i++) {
        const book_ = document.querySelectorAll('.book');
        book_[i].childNodes[1].remove();
    }
}

function remove_trash_() {
    for(let i = 0; i < value.length - 1; i++) {
        const book_ = document.querySelectorAll('.book');
        book_[i].childNodes[1].remove();
    }
}