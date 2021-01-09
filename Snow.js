class Snow {
    constructor() {
        this.pos = createVector(random(0, width), random(-20, -height));
        this.r = random(5, 12.5);
        this.velHor = createVector(random(-5, 5), 0);
        this.acc = createVector(random(-2, 2), 0);
    }
    show() {
        fill(255, 255, 255, 175);
        noStroke();
        ellipseMode(CENTER);
        ellipse(this.pos.x, this.pos.y, this.r * 2)
    }
    move() {
        this.pos.y += map(this.r, 0, 25, 3, 10);
        this.acc.x += random(-2, 2);
        this.velHor.add(this.acc);
        this.velHor.limit(5);
        this.pos.add(this.velHor);
        this.acc.mult(0);
        this.isOffScreen();
    }
    isOffScreen() {
        if (this.pos.y - this.r > height) {
            this.pos = createVector(random(0, width), random(-20, -height));
        }
    }
}