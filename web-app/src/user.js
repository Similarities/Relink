class User {
  constructor(parent, size) {
    this.parent = parent;
    this.size = size;
    this.position = this.startPosition();
    this.velocity = new Position(10, 10);
    this.element = this.div();
  }

  startPosition() {
    const x = Math.round(Math.random() * window.innerWidth);
    const y = Math.round(Math.random() * window.innerHeight);
    return new Position(x, y);
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
    this.position = this.position.add(this.velocity);
    this.element.style.left = `${this.position.x}px`;
    this.element.style.top = `${this.position.y}px`;
  }
}
