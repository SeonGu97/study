'use strict';

// create app
const app = document.createElement('div');
app.setAttribute('id', 'app');

// add to app
document.body.appendChild(app);

// create box
const box = document.createElement('ul');
box.setAttribute('class', 'box');

// add to box
app.appendChild(box);

// 슬라이더의 개수. (변경 가능)
const value = 5;

// create item
for(let i = 0; i < value; i++) {
    const item = document.createElement('li');
    item.setAttribute('class', 'item');

    // inner text in item
    item.innerText = [i + 1];

    // add to item
    box.appendChild(item);

    // create num
    const num = document.createElement('span');
    num.setAttribute('class', 'num');

    // inner text in num
    num.innerText = [i + 1];

    // add to num
    item.appendChild(num);
}

// resize event
window.addEventListener('resize', () => {
    // 화면이 재설정 돼도 현재 counter값에 맞는 화면이 유지됨.
    box.style.transform = `translateY(-${window.innerHeight * counter}px)`;
})

// counter
let counter = 0;

// items
const items = document.querySelectorAll('.item');

// items의 첫번째 자식에게 클래스 부여.
items[0].classList.add('active');

// setTimeout이 실행되는 딜레이. ex) 1000이라면 1초 후 실행.
const delay = 300;

// timer
let timer = null;

// wheel
window.addEventListener('wheel', e => {
    // event preventDefault
    e.preventDefault();

    // 스크롤의 상,하 움직임 감지.
    let Y = e.deltaY;

    // 하: 100을 true로, 상: -100을 false로.
    let result;
    Y == 100 ? result = true : result = false;

    // realTimer()
    realTimer(result);
}, {passive: false});

// realTimer (delay 만큼의 시간이 지난 후 이벤트 발생.)
function realTimer(result) {
    clearTimeout(timer);

    timer = setTimeout(() => {
        Counter(result);
    }, delay);
}

// Counter (딜레이의 시간이 지나고 이벤트 발생 후, result의 값에 따라서 counter값 변경.) 
function Counter(result) {
    if(result) {
        counter++;
    }else {
        counter--;
    }

    // Value()
    Value();
    // removeAll()
    removeAll();
    // add()
    add();
    // move()
    move();
}

// removeAll (items에 적용 돼 있는 active라는 클래스를 모두 제거.)
function removeAll() {
    for(let i = 0; i < value; i++) {
        items[i].classList.remove('active');
    }
}

// add (현재 counter값에 맞는 item 엘리먼트에 active 클래스 부여.)
function add() {
    items[counter].classList.add('active');
}

// Value (counter가 최소값(0) 보다 작아지는 것을 막고, 최대값(value -1) 보다 커지는 것을 막는다.)
function Value() {
    if(counter <= 0) {
        counter = 0;
    }else if(counter >= value - 1) {
        counter = value - 1
    }
}

// move (active가 부여되어있는 item의 자식의 innerText값을 윈도우 높이에 곱해서 슬라이더를 움직인다.)
function move() {
    let text = items[counter].childNodes[1].innerText;

    box.style.transform = `translateY(-${window.innerHeight * (text - 1)}px)`;
}


// 부족한 기능! 
// 아무래도 setTimeout을 사용하기 때문에 휠을 계속 돌리고 있으면 다음/이전 슬라이더로 움직이지 않는다. 
// 이점을 보안 해야 하는데, 음.. 특정 시간 만큼 마우스 휠을 돌렸다면, 강제로 슬라이더가 다음/이전으로 움직이면 될 것같다.
