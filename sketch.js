
var snow_flakes;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    snow_flakes = new SnowFlakes();
}

class SnowFlake {
    constructor() {
        this.init();
    }
    init() {
        this.y = random(-200, 0);
        this.x = random(0, width);
        this.speed = {
            x: 0,
            y: 0.1 + random(1.5),
        };
        this.w = random(10);
    }
    draw() {
        noStroke();
        fill(240, 240, 240, 200);
        circle(this.x, this.y, this.w);
        this.y += this.speed.y;
        this.x += this.speed.x;
    }
    update() {
        if (this.y > height) {
            this.init();
        }
    }
}
class SnowFlakes {
    constructor() {
        this.snow_flakes = []
        for (let i = 0; i < 200; i++) {
            this.snow_flakes[i] = new SnowFlake();
        }
    }
    draw() {
        for (let s of this.snow_flakes) {
            s.draw();
        }
    }
    update() {
        for (let s of this.snow_flakes) {
            s.update();
        }
    }
}



function draw() {
    clear(0);
    snow_flakes.update();
    snow_flakes.draw();
}

