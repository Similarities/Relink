class User {
  constructor(meta, parent, canvas, size, headerHeight, footerHeight, gridmap) {
    this.meta = meta;
    this.parent = parent;
    this.canvas = canvas;
    this.size = size;
    this.headerHeight = headerHeight;
    this.footerHeight = footerHeight;
    console.log(this.footerHeight);
    this.gridmap = gridmap;
    this.position = this.gridmap.generateCoordinates();
    //console.log(this.position, 'coordinates')
    this.velocity = new Position(10, 10);
    this.element = this.div();
  }

  startPosition() {
    const x = Math.round(Math.random() * this.canvas.width);
    const y = Math.round(Math.random() * (this.canvas.height - this.size - 2)) + this.headerHeight;
    return new Position(x, y);
  }


  overflow(){
  
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
    if (this.position.y > this.headerHeight && this.position.y < this.footerHeight ){

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
    else{console.log('neither')};

  }

  update() {
    //toDo move until position is not having overlapp
    this.position = this.position.add(this.velocity);
    this.element.style.left = `${this.position.x}px`;
    this.element.style.top = `${this.position.y}px`;
  }
}
