class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return (this.width + this.height) * 2;
  }
  draw(canvas) {
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, this.width, this.height);
    ctx.stroke();
  }
}

let canvas = document.getElementById("myCanvas");
let rectangle = new Rectangle(200, 100);
rectangle.draw(canvas);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
rectangle.width = 300;
rectangle.height = 150;
rectangle.draw(canvas);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
