class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    distance(other){
        return Math.sqrt(Math.pow(this.x- other.x, 2) + Math.pow(this.y- other.y, 2));
    }
}