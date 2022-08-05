const maxThirty = [
    [-267,-723],
    [-380,-796]
  ];
  
  const maxFiftykmh = [
    [-604,-724],
    [-628,-95],
    [-212,431],
    [-193,111]
  ];
  
  const maxSeventy = [
    [216,-581],
    [-830,237],
    [-501,461],
    [882,-550],
    [149,-568] // START
  ];
  
  const maxNinety = [
    [781,424],
    [-230,-307]
  ];
  
  const stopper = [
    [843,420],
    [-308,-729]
  ];

  var maxSpeed = 70;






  for (let i = 0; i < maxThirty.length; i++) { 
    if (
        position[0]>maxThirty[0]

    ){}



  };


function whatsMaxSPeed(){
    var currentMaxSpeed;
    currentMaxSpeed=checkMaxSpeed(maxThirty,30);
    currentMaxSpeed=checkMaxSpeed(maxFiftykmh,50);
    currentMaxSpeed=checkMaxSpeed(maxSeventy,70);
    currentMaxSpeed= checkMaxSpeed(maxNinety,90);
    currentMaxSpeed= checkMaxSpeed(stopper,"stop");

    //console.log("Max speed is "+currentMaxSpeed+"km/h.")
    $("#maxSpeed").attr("src",);
    return currentMaxSpeed;
}


  function checkMaxSpeed(listPosition, currentMaxSpeed){
    for (let i = 0; i < listPosition.length; i++) {
        if (
            position[0]>listPosition[i][0]-trackInterval &&
            position[0]<listPosition[i][0]+trackInterval &&
            position[1]>listPosition[i][1]-trackInterval &&
            position[1]<listPosition[i][1]-trackInterval 

        ){
            
            return currentMaxSpeed;
        }
    ;}
        
  }; 