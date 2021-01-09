class Rain {
    constructor() {
        this.pos = createVector(random(0, width), random(-25, -height));
        this.long = random(10, 25);
    }
    show() {
        fill(0, 50, 255, 100);
        stroke(0, 50, 255, 100);
        strokeWeight(15);
        line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.long);
    }
    move() {
        this.pos.y += map(this.long, 0, 25, 3, 30)
        this.isOffScreen();
    }
    isOffScreen() {
        if (this.pos.y - this.long > height) {
            this.pos = createVector(random(0, width), random(-20, -height));
        }
    }
}