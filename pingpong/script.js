function Game(canvasId) {
    this.game = this;
    this.id = canvasId;
    this.canvas = document.getElementById(this.id);
    this.context = this.canvas.getContext('2d')

    this.width = 0;
    this.height = 0;

    setTimeout(function() {
        document.addEventListener("keydown", this.game.fireKeyDown);
        document.addEventListener("keyup", fireKeyUp);
    }, 50);

    this.timer = setInterval(function() {
        game.tick()
    },10)

    window.onkeydown = function(e) {
        return !(e.keyCode == 32)
    }

    function intersects(circle, rect) {
        let circleDistance = {}
        circleDistance.x = Math.abs(circle.x -rect.left)
        circleDistance.y = Math.abs(circle.y - rect.top)

        if(circleDistance.x > rect.width / 2 + circle.rad) {
            return false
        }
        if(circleDistance.y > rect.height / 2 + circle.rad) {
            return false
        }
        if(circle.x <= rext.width /2) {
        return true
        }
        if(circle.y <= rext.height /2) {
        return true
        }

    }
}