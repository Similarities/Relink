
class IntersectionPoint {
    constructor(canvas, ctx, radius) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.radius = radius;
        this.position = this.startPosition();
    }
    startPosition() {
        const x = Math.round(Math.random() * this.canvas.width);
        const y = Math.round(Math.random() * this.canvas.height);
        return new Position(x, y);
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, true);
        this.ctx.strokeStyle = 'red';
        this.ctx.stroke();
    }
}
