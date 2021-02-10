class User {
  constructor(meta, parent, canvas, size, headerHeight) {
    this.meta = meta;
    this.parent = parent;
    this.canvas = canvas;
    this.size = size;
    this.headerHeight = headerHeight;
    this.position = this.startPosition();
    this.velocity = new Position(10, 10);
    this.element = this.div();
  }

  startPosition() {
    const x = Math.round(Math.random() * this.canvas.width);
    const y = Math.round(Math.random() * (this.canvas.height - this.size - 2)) + this.headerHeight;
    return new Position(x, y);
  }

  div() {
    const name = document.createElement("h3");
    name.className = "name";
    name.innerHTML = this.meta.name;

    const shortDescription = document.createElement("p");
    shortDescription.className = "shortDescription";
    shortDescription.innerHTML = this.meta.shortDescription;

    const element = document.createElement("div");
    element.className = "user";
    element.style.position = "absolute";
    element.style.width = `${this.size}px`;
    element.style.height = `${this.size}px`;
    element.style.left = `${this.position.x}px`;
    element.style.top = `${this.position.y}px`;

    element.appendChild(name);
    element.appendChild(shortDescription);
    this.parent.appendChild(element);
    return element;
  }

  update() {
    this.position = this.position.add(this.velocity);
    this.element.style.left = `${this.position.x}px`;
    this.element.style.top = `${this.position.y}px`;
  }
}
