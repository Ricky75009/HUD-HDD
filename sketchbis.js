var maxSpeed;
var position =[149,-568];
var trackInterval=30;
var currentSpeed=0;

const maxThirtykmh = [
  [-267,-723],
  [-380,-796]
];

const maxFiftykmh = [
  [-604,-724],
  [-628,-95],
  [-212,431],
  [-193,111]
];

const maxSeventykmh = [
  [216,-581],
  [-830,237],
  [-501,461],
  [882,-550],
  [149,-568] // START
];

const maxNinetykmh = [
  [781,424],
  [-230,-307]
];

const stopper = [
  [843,420],
  [-308,-729]
];



const speedList = [
  [30, maxThirtykmh],
  [50, maxFiftykmh],
  [70, maxSeventykmh],
  [90, maxNinetykmh],
  ["stop", stopper],

];

const imgList = [
  [30,"https://cdn.glitch.global/095851cb-88eb-4ce5-909f-0a88d21849d2/30.png?v=1659435143653"],
  [50,"https://cdn.glitch.global/095851cb-88eb-4ce5-909f-0a88d21849d2/50.png?v=1659627302993"],
  [70,"https://cdn.glitch.global/095851cb-88eb-4ce5-909f-0a88d21849d2/70.png?v=1659627302993"],
  [90,"https://cdn.glitch.global/095851cb-88eb-4ce5-909f-0a88d21849d2/90.png?v=1659627302993"],
  ["stop","https://cdn.glitch.global/095851cb-88eb-4ce5-909f-0a88d21849d2/STOP.png?v=1659627302993"]
];


// Global parameters
const EASING_SPEED = 0.05;

// WEBSOCKET SERVER URL
const serverAddress = 'wss://hud-server.glitch.me/';
// const serverAddress = 'wss://pcamp-telegram-bot.glitch.me/';


let pos = {
  x: 149,
  y: -568,
  speed:0 
};


let target = {
  x: 0,
  y: 0,
  speed: 0
};


function setup() {
  
}

function draw() {
  // background(220);
 
  // Ease position into target
  
}

function mouseClicked() {
  setTarget(mouseX, mouseY, +1);
  sendTargetToServer();
  
  // console.log("New target is: ");
  // console.log(target);
}

function setTarget(tx, ty, ts) {
  target = {
    x: tx, 
    y: ty,
    speed: ts
  }
}

function sendTargetToServer() {
  let norm = {
    x: target.x / width,
    y: target.y / height,
    speed:target.speed
    
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
  position[0]=obj.x;
  position[1]=obj.y;
  target = obj;
  //console.log("x="+ obj.x +"\ny="+obj.y+"\nspeed="+obj.speed+"km/h");
  currentSpeed=obj.speed;
}






var curve = "uTurn";
var distanceToCurve = 200;



function speeding() {
  $("h2").html(currentSpeed + " km/h");
  if (currentSpeed > maxSpeed) {
    $("h2").css("color", "red");
  } else {
    $("h2").removeAttr("style");
  }
}

function bottomMargin() {
  document.documentElement.style.setProperty(
    "--margin-bottom",
    document.getElementById("id-curve").clientWidth -
      document.getElementById("id-curve").clientHeight +
      "px"
  );
}





function whatsMaxSPeed(){
  for (let i = 0; i < speedList.length; i++) {
    if(test2(position,speedList[i][0],speedList[i][1]) == true){
      test2(position,speedList[i][0],speedList[i][1]);
      $("#maxSpeed").attr("src",putASignOn(maxSpeed));
//      console.log("Max current speed allowed is " + maxSpeed + " Km/h.");
      return true;
    }
  

};
};



function putASignOn(){

  for (let i = 0; i < imgList.length; i++) {
    
    if (imgList[i][0]==maxSpeed){
        return imgList[i][1];
    }
    
  };
return false;

};



function test(currentCoordinates, testingSpeed, signCoordinates){

    if (
      currentCoordinates>signCoordinates-trackInterval &&
      currentCoordinates<signCoordinates+trackInterval 
      
    ){

      maxSpeed=testingSpeed;

       
       return true;
    
    };     
  return false;
};


function test2(currentCoordinates, testingSpeed, signCoordinates){
  let signCoordinatesX=[];
  let signCoordinatesY=[];

  for (let i = 0; i < signCoordinates.length; i++) {
    signCoordinatesX.push(signCoordinates[i][0]);
    signCoordinatesY.push(signCoordinates[i][1]);
    if(
    test(currentCoordinates[0],testingSpeed,signCoordinatesX[i]) ==true &&
    test(currentCoordinates[1],testingSpeed,signCoordinatesY[i]) == true


    ){ 
     
      maxSpeed=testingSpeed;
      return true;


    }
  
  };

 
  return false;        

};







setInterval(function () {
  speeding();
  bottomMargin();
  whatsMaxSPeed();
}, 10);





