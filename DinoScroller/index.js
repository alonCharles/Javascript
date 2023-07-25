const map = document.querySelector('.map')
const dino = document.querySelector('.dino')
const cactus = document.querySelector('.cactus')
const bird = document.querySelector('.bird')
const scoreText = document.querySelector('.score')
const startButton = document.querySelector('.start_button')

let gameInterval
let isJumping = false 
let position = 50
let score = 0
let speed = 2
let obstacles = ["cactus", "bird"]
let obstaclePosition = 550
let nextObstacle = obstacles[Math.floor(Math.random() * obstacles.length)]
let backgroundPosition = 0

function handleKeyDown(event) {
    if(event.code = 'Space') {
        isJumping = true

        let upInterval = setInterval(() =>{
            if(position >= 200) {
                clearInterval(upInterval)

                //down
                let downInterval = setInterval(() => {
                    if(position <= 50) {
                        clearInterval(downInterval)
                        isJumping = false
                    } else {
                        position -=10;
                        dino.style.bottom = position + 'px'
                    }
                })
            } else {
                position += 10
                dino.style.bottom = position + 'px'
            }
        }, 20)
    }
}

function updateObstaclePosition() {
    obstaclePosition -= speed
    if(nextObstacle === 'cactus') {
        cactus.style.right = 550 - obstaclePosition + 'px'
    } else if (nextObstacle === 'bird') {
        bird.style.right = 550 - obstaclePosition + 'px'
    }
}

function moveBackground() {
    backgroundPosition -= speed
    map.style.left = backgroundPosition + 'px'
    if(backgroundPosition < -550) backgroundPosition += 550
}

function updateScore () {
    scoreText.innerHTML = `Score : ${score}`
}

function checkAvoid() {
    if ( obstaclePosition < -30) {
        obstaclePosition = 550
        score ++
        updateScore()
        speed += 0.5
        nextObstacle = obstacles[Math.floor(Math.random() * obstacles.length)]
    }
}

function gameOver() {
    clearInterval(gameInterval)
    startButton.style.display = 'block'
}

function checkObstacleCollision() {
    if(nextObstacle === 'cactus') {
        if(obstaclePosition < 100 && obstaclePosition > 20 && position < 120) {
            console.log('obstacle hit')
            gameOver()
        } else if (nextObstacle === 'bird') {
            if(obstaclePosition < 50 && obstaclePosition > 0 && position < 80){
            gameOver()
            }
        }
    }
}

function gameInit() {
    obstaclePosition = 550
    cactus.style.right = '-55px'
    bird.style.right = '-50px'
    score = 0
    updateScore()
    speed = 2
}

startButton.addEventListener('click', () => {
    startButton.style.display = 'none'
    gameInit()
    
    gameInterval = setInterval(() => {
        updateObstaclePosition()
        checkAvoid()
        checkObstacleCollision()
        moveBackground()
    })

    document.addEventListener('keydown', handleKeyDown)
})