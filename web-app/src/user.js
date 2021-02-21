class User {
  constructor(parent, size, position) {
    this.parent = parent;
    this.canvas = canvas;
    this.size = size;
    this.position = position;
    this.area = new Rectrangle(this.position, this.size);
    this.velocity = new Position(10, 10);
    this.element = this.div();
  }

  collide(other){
    return this.area.collide(other.area);
  }

  setPosition(position){
    this.position = position;
  }

  div() {
    const element = document.createElement("div");
    element.className = "user";
    element.style.position = "absolute";
    element.style.width = `${this.size}px`;
    element.style.height = `${this.size}px`;
    element.style.left = `${this.position.x}px`;
    element.style.top = `${this.position.y}px`;
    this.parent.appendChild(element);
    return element;
  }

  update() {
    this.element.style.left = `${this.position.x}px`;
    this.element.style.top = `${this.position.y}px`;
  }
}
