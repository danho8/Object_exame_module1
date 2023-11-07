class Temperature {
  constructor(c) {
    this.c = c;
  }
  get f() {
    return this.c * 1.8 + 32;
  }
  get k() {
    return this.c + 273;
  }
  set f(value) {
    this.c = (value - 32) / 1.8;
  }
  set k(value) {
    this.c = value - 273;
  }
}

let temp = new Temperature(25);
console.log(temp.f);
console.log(temp.k);
temp.f = 100;
console.log(temp.c);
temp.k = 100;
console.log(temp.c);
