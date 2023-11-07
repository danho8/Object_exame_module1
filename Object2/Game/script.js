function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return `<img width="${this.size}"
            height="${this.size}"
            src="${this.image}"
            style="top:${this.top}px;left:${this.left}px;position:absolute;" />`;
  };

  this.moveRight = function () {
    this.left += 20;
    console.log("move: " + this.left);
  };
  //   Viết thêm các hàm để nhân vật có thể di chuyển xung quanh màn hình
  this.moveLeft = function () {
    this.left -= 20;
    console.log("move: " + this.left);
  };
  this.moveDown = function () {
    this.top += 20;
    console.log("move: " + this.top);
  };
  this.moveUp = function () {
    this.top -= 20;
    console.log("move: " + this.top);
  };
}

var hero = new Hero("pikachu.png", 20, 30, 200);

function start() {
  if (hero.left < window.innerWidth - hero.size) {
    // hero.moveRight();
    // hero.moveDown();
    // hero.moveLeft();
    // hero.moveUp();
  }
  document.getElementById("game").innerHTML = hero.getHeroElement();
  setTimeout(start, 500);
}

function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      hero.moveLeft();
      console.log("left");
      break;
    case 39:
      hero.moveRight();
      console.log("right");
      break;
    case 38:
      hero.moveUp();
      console.log("up");
      break;
    case 40:
      hero.moveDown();
      console.log("down");
      break;
  }
}

window.addEventListener("keydown", moveSelection);

start();
