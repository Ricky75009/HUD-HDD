/*// Global parameters
const EASING_SPEED = 0.05;

// WEBSOCKET SERVER URL
const serverAddress = 'wss://hud-server.glitch.me/';
// const serverAddress = 'wss://pcamp-telegram-bot.glitch.me/';

// Current ball postion
let pos = {
  x: 0,
  y: 0
};

// Target ball position
let target = {
  x: 0,
  y: 0
};


function setup() {


}

function draw() {
  // background(220);

}

function mouseClicked() {
  setTarget(mouseX, mouseY);
  sendTargetToServer();
  
  // console.log("New target is: ");
  // console.log(target);
}

function setTarget(tx, ty) {
  target = {
    x: tx, 
    y: ty
  }
}

function sendTargetToServer() {
  let norm = {
    x: target.x / width,
    y: target.y / height
  }
  let str = JSON.stringify(norm);
  serverConnection.send(str);
}


const serverConnection = new WebSocket(serverAddress);

serverConnection.onopen = function() {
  console.log("I just connected to the server on " + serverAddress);
 // serverConnection.send('hello server');
}

serverConnection.onmessage = function(event) {
  console.log("Received: " + event.data);
  let obj = JSON.parse(event.data);
  obj.x *= width;
  obj.y *= height;
  target = obj;
}






*/