function Particle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
Particle.prototype.move = function () {
    this.x = this.x + 20;
    this.y = this.y + -10;
}
Particle.prototype.draw = function () {
    document.body.appendChild(this);
}

const p1 = new Particle(50, 50, 25);
const p2 = new Particle(0, 20, 30);