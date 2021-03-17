
class IntersectionPoint {
    constructor(canvas, ctx, radius) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.radius = radius;
        this.position = this.startPosition();
    }
    startPosition() {
        //ToDo p/m switcher - with random choice
        const variation_x = -1*Math.round( Math.round(Math.random()*1.1))
        const variation_y = Math.round(Math.random()*1.2)
        const x = Math.round(Math.floor(Math.random() * this.canvas.width))*1.2;
        // negative goes up
        const y = Math.round(Math.random() * this.canvas.height)*1.2 -10;
        return new Position(x, y);
    }

    draw(){
        this.ctx.beginPath();
        ctx.strokeStyle = '#ff66ff';
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, true);
        this.ctx.stroke();
    }
}
