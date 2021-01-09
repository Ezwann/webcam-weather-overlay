class Sun {
    constructor() {
        this.r = 200;
        this.d = this.r * 2;
        this.pos = createVector(width, 0);
        this.t = 0.5;
        this.dirT = true;
    }
    show(time) {
        noStroke();
        var glow = time == "d" ? color(255, 205, 35, 50) : color(saturation(255, 205, 35), 50);
        fill(glow);
        ellipse(0, 0, this.d * 2 * this.t);
        ellipse(0, 0, this.d * 3 * this.t);
        ellipse(0, 0, this.d * 4 * this.t);
        var backColor = color(200, 130, 10)
        fill(time == "d" ? backColor : saturation(backColor));
        ellipse(0, 0, this.d, this.d);
        var frontColor = color(250, 200, 0)
        fill(time == "d" ? frontColor : 200);
        ellipse(5, 11, this.d - 50, this.d - 30);
        if (this.dirT) {
            this.t += 0.00075;
            if (this.t >= 1) this.dirT = false;
        } else {
            this.t -= 0.00075;
            if (this.t <= 0.5) this.dirT = true;
        }
    }
}