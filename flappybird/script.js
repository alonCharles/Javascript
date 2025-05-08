

//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImg

let bird = {
    x:birdX,
    y:birdY,
    width:birdWidth,
    height:birdHeight
}

//pipes
let pipeArray = []
let pipeWidth = 64
let pipeHeight = 512
let pipeX = boardWidth
let pipeY = 0

let topPipeImg
let bottomPipeImg

//physics
let velocityX = -2 // pipe movemoent speed
let velocityY = 0 // bird movement speed
let gravity = 0.4
let gameOver = false
let score = 0

window.onload = function(){
    board = document.getElementById('board');
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext('2d')

    birdImg = new Image()
    birdImg.src = './assets/flappybird.png'
    birdImg.onload = function() {
        context.drawImage(birdImg, bird.x,bird.y,bird.width,bird.height)
    }

    topPipeImg = new Image()
    topPipeImg.src = './assets/toppipe.png'

    bottomPipeImg = new Image()
    bottomPipeImg.src = './assets/bottompipe.png'

    requestAnimationFrame(update)
    setInterval(placePipes, 1500)
    document.addEventListener('keydown', moveBird)
}

function update() {
    requestAnimationFrame(update)
    if (gameOver) {
        return
    }
    context.clearRect(0,0,board.width,board.height)

    velocityY += gravity
    if(bird.y <= 0) {
        bird.y = velocityY
    } 
    bird.y = bird.y + velocityY
    context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height)

    if(bird.y > board.height) {
        gameOver = true
    }

    for(let i  = 0; i <pipeArray.length; i++) {
        let pipe = pipeArray[i]
        pipe.x += velocityX
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height)

        if(!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 50
            pipe.passed = true
        }

        if (detectCollison(bird, pipe)) {
            gameOver = true
        }
    }

    while(pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift()
    }

    context.fillStyle = 'white'
    context.font = '45px sans-serif'
    context.fillText(score, 5, 45)
    if(gameOver) {
        context.fillText('GAME OVER', 45, 90)
    }

}

function placePipes() {
    if(gameOver) {
        return
    }
    let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2)
    let openingSpace = board.height / 4

    let topPipe = {
        img:topPipeImg,
        x:pipeX,
        y:randomPipeY,
        width:pipeWidth,
        height:pipeHeight,
        passed:false
    }
    pipeArray.push(topPipe)

    let bottompipe = {
        img:bottomPipeImg,
        x:pipeX,
        y:randomPipeY + pipeHeight + openingSpace,
        width:pipeWidth,
        height:pipeHeight,
        passed:false
    }
    pipeArray.push(bottompipe)

    
}

function moveBird(e) {
    if(e.code == "KeyW"){
        velocityY = -6

        //reset game
        if(gameOver) {
            bird.y = birdY
            pipeArray = []
            score = 0
            gameOver = false
        }
    }
        
}

function detectCollison(a,b) {
    return a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
}