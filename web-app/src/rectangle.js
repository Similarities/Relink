class Rectrangle{
    constructor(position, size) {
        this.topLeft = position;
        this.size = size;
    }

    collide(other){

        return   this.topLeft.x + this.size >= other.topLeft.x && // left border of rectangle 2
                 this.topLeft.x <= other.topLeft.x+ other.size && // right boundary of rectangle 2
                 this.topLeft.y + this.size >= other.topLeft.y && // upper boundary of rectangle 2
                 this.topLeft.y <= other.topLeft.y + other.size; // lower boundary of rectangle 2

    }
}