var maxSpeed=110;
var currentSpeed=0;

$(document).mousemove(function(event){
    currentSpeed=Math.trunc(event.pageY/5);
  
});;

var curve="uTurn";
var distanceToCurve=200;
 
//GET maxSpeed
//GET currentSpeed
function speeding(){
    $("h2").html(currentSpeed+" km/h")
if(currentSpeed>maxSpeed){
$("h2").css("color", "red")}
else{
    $("h2").removeAttr("style")
};

};


setInterval(function() {
speeding();
}, 100);






