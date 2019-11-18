class Particles {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    move() {
        this.x = this.x + 20;
        this.y = this.y - 10;
    }

    draw() {
        document.body.appendChild(this);
    }
}