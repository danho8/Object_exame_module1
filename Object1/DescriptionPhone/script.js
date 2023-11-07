class Mobile {
  constructor() {
    this.battery = 100;
    this.draft = "";
    this.inbox = [];
    this.sent = [];
    this.status = false;
  }
  checkStatus() {
    return this.status;
  }
  turnOn() {
    this.status = true;
  }
  turnOff() {
    this.status = false;
  }
  charge() {
    this.battery = 100;
  }
  writeDraft(content) {
    if (this.checkStatus()) {
      this.draft = content;
      this.battery--;
    }
  }
  receiveMessage(message) {
    if (this.checkStatus()) {
      this.inbox.push(message);
      this.battery--;
    }
  }
  sendMessage(mobile) {
    if (this.checkStatus()) {
      mobile.receiveMessage(this.draft);
      this.sent.push(this.draft);
      this.draft = "";
      this.battery--;
    }
  }
  viewInbox() {
    if (this.checkStatus()) {
      this.battery--;
      return this.inbox;
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
