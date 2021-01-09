class Thunder {
    constructor() {
        this.getFirstSegments();
    }
    getFirstSegments() {
        this.fade = 100;
        this.strokeBri = random(0, 255)
        this.strokeWeight = random(3, 9)
        this.segments = [];
        this.segments.push(createVector(random(width / 8, width - width / 8), 0));
        this.segments.push(this.getNextSegment(this.segments[0]));
    }
    getNextSegment(segment) {
        return createVector(segment.x + int(random(-50, 50)), segment.y + int(random(0, 50)))
    }
    update() {
        var lastSegment = this.segments[this.segments.length - 1];
        this.stroke = color(255, 255, this.strokeBri, this.fade)
        if (this.fade <= 0) {
            this.getFirstSegments();
        } else {
            var amountUpdated = int(random(1, 2));
            for (let i = 0; i < amountUpdated; i++) {
                lastSegment = this.segments[this.segments.length - 1];
                this.segments.push(this.getNextSegment(lastSegment));
            }
            this.fade -= random(0.25, 0.75);
        }
    }
    show() {
        push();
        if (this.segments.length == 2) {
            fill(255, 255, 255, 127)
            rect(0, 0, width, height);
        }
        this.update();
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        for (let i = 0; i < this.segments.length - 2; i++) {
            line(this.segments[i].x, this.segments[i].y, this.segments[i + 1].x, this.segments[i + 1].y);
        }
        pop();
    }
}
class ThunderStorm {
    constructor() {
        this.thunders = [];
    }
    setDensity(density) {
        this.density = density;
        this.keepUpdated();
    }

    keepUpdated() {
        while (this.thunders.length > this.density) this.thunders.pop();
        while (this.thunders.length < this.density) this.thunders.push(new Thunder());
    }
    show() {
        this.thunders.map(e => e.show());
    }
}