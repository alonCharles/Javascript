const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('#score');
const cursor = document.querySelector('.cursor');
const timeRange = document.querySelector('#time');
const startButtons = document.querySelectorAll('.start_button');
const startDimmed = document.querySelector('.start_dimmed');

let score = 0;
let lastHole;
let playTime = 10;
let remainTime = playTime;
let isClick = false;
let timeInterval;
let min = 200,
    max = 1000;

    // cursor hit

const positionElement = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
}

window.addEventListener("mousemove", positionElement);

document.addEventListener('click', () => {
    if(isClick) return;
    isClick = true;
    cursor.style.transform = "rotate(-90deg)";
    setTimeout(() => {
        cursor.style.transform = "rotate(0deg)";
        isClick = false;
    }, 100);
});

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    //same hole
    if(hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function randomTime(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

//show and hide
function peep() {
    const time = randomTime(min,max);
    const hole = randomHole(holes);

    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if(remainTime > 0) peep();
        else {
            startDimmed.style.display = "flex";
        }
    },time);
}

function startGame() {
    peep();
    timeInterval = setInterval(() => {
        remainTime -= 0.02;
        timeRange.style.width = `${(remainTime / playTime) * 100}%`
    }, 20);
}

//startGame();


function bonk(e) {
    if(!e.isTrusted) return;
    if([...this.classList].includes('up')) {
        score++;
        this.classList.remove('up');
    }
    this.classList.add('hit');
    setTimeout(() => {
        this.classList.remove('hit');
    }, 200);
    scoreBoard.textContent = score;
}

holes.forEach((hole) => hole.addEventListener('click', bonk));

document.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

