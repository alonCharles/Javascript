let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns;
let boardHeight = tileSize * rows;
let context;

let shipWidth = tileSize *2
let shipHeight = tileSize
let shipX = tileSize * columns / 2 - tileSize;
let shipY = tileSize * rows - tileSize*2;

let ship = {
    x:shipX,
    y:shipY,
    width:shipWidth,
    height:shipHeight
}
let shipImg
let shipVelocityX = tileSize

let aliensArray = []
let alienWidth = tileSize * 2
let alienHeight = tileSize
let alienX = tileSize
let alienY = tileSize
let alienImg


let alienRows = 2
let alienColumns = 3
let alienCount = 0
let alienVelocityX = 1


let bulletArray = []
let bulletVelocityY = -10

let score = 0
let gameOver = false


window.onload = function() {
    board = document.getElementById('board');
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");

    shipImg = new Image()
    shipImg.src = "../assets/ship.png"
    shipImg.onload = function() {
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height)
    }

    alienImg = new Image()
    alienImg.src = "../assets/alien.png";
    createAliens()

    requestAnimationFrame(update)
    document.addEventListener("keydown",moveShip)
    document.addEventListener("keyup", shoot)
}

function update() {
requestAnimationFrame(update)

if(gameOver) {
    return;
}
context.clearRect(0,0,board.width,board.height)
//draw ship
context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height)

//draw Alien
for(let i = 0; i< aliensArray.length; i++) {
    let alien = aliensArray[i]
    //alien/border collision check
    if(alien.alive) {
        alien.x += alienVelocityX
        if(alien.x + alien.width >= board.width || alien.x <=0) {
            alienVelocityX *= -1
            alien.x += alienVelocityX*2

            //move aliens down a row whenever they hit a border
            for(let j = 0; j < aliensArray.length; j++) {
                aliensArray[j].y += alienHeight
            }
        }
        context.drawImage(alienImg, alien.x, alien.y, alien.width, alien.height)
        if(alien.y >= ship.y) {
            gameOver = true
        }
    }

    }
    //bullets
    for (let i = 0; i < bulletArray.length; i++) {
        let bullet = bulletArray[i]
        bullet.y += bulletVelocityY
        context.fillStyle="white"
        context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height)

        //bullet/ alien collision check
        for (let j = 0; j < aliensArray.length; j++) {
            let alien = aliensArray[j]
            if(!bullet.used && alien.alive && checkCollision(bullet, alien)) {
                bullet.used = true
                alien.alive = false
                alienCount --
                score += 100
            }

        }
    }
    //clear bullets
    while ( bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y < 0 )) {
        bulletArray.shift() // removes  bullet after it leaves board
    }
    //next level
    if (alienCount == 0) {
        //increase alien count by 1
        alienColumns = Math.min(alienColumns + 1, columns/2 - 2)// cap columns so aliens still have space on board
        alienRows = Math.min(alienRows + 1, rows-4) // cap rows to keep space for ship
        alienVelocityX += 0.2 //increase alien speed
        aliensArray = []
        bulletArray = []
        createAliens()
    }
    //score
    context.fillStyle = "white"
    context.font = "16px courier"
    context.fillText(score, 5, 20)
}

function moveShip(e) {
    if(gameOver) {
        return;
    }
    if(e.code === 'ArrowLeft' && ship.x - shipVelocityX >=0) {
        ship.x -= shipVelocityX // moves ship one tile left
    } else if (e.code === 'ArrowRight' && ship.x + shipVelocityX + ship.width <= board.width) {
        ship.x += shipVelocityX //moves ship one tile right
    }
}

function createAliens() {
    for (let c = 0; c < alienColumns; c ++) {
        for (let r = 0; r < alienRows; r++) {
            let alien = {
                img: alienImg,
                x: alienX + c*alienWidth,
                y: alienY + r*alienHeight,
                width: alienWidth,
                height: alienHeight,
                alive: true
            }
            aliensArray.push(alien)
        }
    }
    alienCount = aliensArray.length;
}

function shoot(e) {
    if(gameOver) {
        return
    }
    if (e.code === "Space") {
        let bullet = {
            x:ship.x + shipWidth*15/32,
            y:ship.y,
            width: tileSize/8,
            height: tileSize/2,
            used: false
        }
        bulletArray.push(bullet)
    }
}

function checkCollision(a,b) {
    return a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
}