class Mobile {
  constructor() {
    this.battery = 100; // trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv).
    this.draft = ""; // tin nhắn nháp
    this.inbox = []; // hộp thư đến
    this.sent = []; // hộp thư đi
    this.status = false; // trạng thái máy (on/off)
  }
  checkStatus() {
    // kiểm tra trạng thái máy
    return this.status;
  }
  turnOn() {
    // bật máy
    this.status = true;
  }
  turnOff() {
    this.status = false;
  }
  charge() {
    // sạc pin
    this.battery = 100;
  }
  writeDraft(content) {
    // viết tin nhắn nháp
    if (this.checkStatus()) {
      this.draft = content;
      this.battery--;
    }
  }
  receiveMessage(message) {
    // nhận tin nhắn
    if (this.checkStatus()) {
      // kiểm tra trạng thái máy
      this.inbox.push(message); // thêm tin nhắn vào hộp thư đến
      this.battery--;
    }
  }
  sendMessage(mobile) {
    // gửi tin nhắn
    if (this.checkStatus()) {
      mobile.receiveMessage(this.draft); // gửi tin nhắn đến
      this.sent.push(this.draft);
      this.draft = "";
      this.battery--;
    }
  }
  viewInbox() {
    if (this.checkStatus()) {
      this.battery--;
      return this.inbox; // trả về hộp thư đến
    }
  }
  viewSent() {
    if (this.checkStatus()) {
      this.battery--;
      return this.sent;
    }
  }
}

let nokia = new Mobile();
let iphone = new Mobile();
nokia.turnOn();
iphone.turnOn();
nokia.writeDraft("Hello");
nokia.sendMessage(iphone);
console.log(iphone.viewInbox());
console.log(iphone.viewSent());
console.log(iphone.battery);
console.log(nokia.battery);
nokia.turnOff();
console.log(nokia.checkStatus());
nokia.turnOn();
console.log(nokia.checkStatus());
console.log(nokia.battery);
nokia.writeDraft("Hello");
nokia.sendMessage(iphone);
console.log(iphone.viewInbox());
console.log(iphone.viewSent());
console.log(iphone.battery);
console.log(nokia.battery);
nokia.turnOff();
console.log(nokia.checkStatus());
nokia.turnOn();
console.log(nokia.checkStatus());
