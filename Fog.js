class Fog {
    constructor() {
        this.tileCount = 150;
        this.noise = 0.05;
        this.grid = [];
        this.t = 0;
        this.createGrid();
    }
    createGrid() {
        var tileSize = width / this.tileCount;
        for (let i = 0; i < this.tileCount; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.tileCount; j++) {
                this.grid[i].push(new Tile(i * tileSize, j * tileSize, tileSize));
            }
        }
    }
    show() {
        this.t += 0.01;
        this.ynoise = this.t;
        this.grid.forEach(element => {
            this.xnoise = this.t;
            element.forEach(e => {
                e.show(noise(this.xnoise, this.ynoise) * 176);
                this.xnoise += this.noise;
            });
            this.ynoise += this.noise;
        });
    }
}
class Tile {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    show(a) {
        noStroke();
        fill(176, a);
        rect(this.x, this.y, this.size, this.size);
    }
}