const SAFE_DISTANCE = 100;
var pathWidth = document.getElementById("game_main_div").offsetWidth;
var saciTop = document.getElementById("saci_onelegged_walking_2").offsetTop * (-1);
var saciWidth = document.getElementById("saci_perere_div").offsetWidth;

var xPositionOftheFarmer = getXaxisPosition(document.getElementById("farmer-div"));
var xPositionOftheOnca   = getXaxisPosition(document.getElementById("onca-div"));
var xPositionOftheSucuri = document.getElementById("sucuri-div").offsetLeft;

var xDistanceFromFarmer = pathWidth - (xPositionOftheFarmer * (-1));
var xDistanceFromOnca   = pathWidth - (xPositionOftheOnca * (-1));
var xDistanceFromSucuri = (xPositionOftheSucuri/20)-35;

var messageToUser = ""
/*
messageToUser = " saci_perere_divTop = " + saciTop 
+ " xDistanceFromFarmer = " + xDistanceFromFarmer 
+ " xDistanceFromOnca: " + xDistanceFromOnca 
+ " xDistanceFromSucuri: " + xDistanceFromSucuri;
*/

var meetFarmer = (xDistanceFromFarmer >= 0 && xDistanceFromFarmer <= SAFE_DISTANCE);
var meetOnca   = (xDistanceFromOnca >= 0 && xDistanceFromOnca <= SAFE_DISTANCE);
var meetSucuri = (xDistanceFromSucuri >= 95 && xDistanceFromSucuri <= SAFE_DISTANCE);
var saciIsSafe = (saciTop >= SAFE_DISTANCE);
var saciIsSafeFromSucuri = (saciTop >= (SAFE_DISTANCE - 50));

if (meetFarmer || meetOnca || meetSucuri ) {

    if ( ((meetFarmer || meetOnca ) && saciIsSafe ) ||
         (meetSucuri && saciIsSafeFromSucuri) )
    {
      gwd.globalVars.score++;
      addScoreToBar(gwd.globalVars.score);
    }
    else if (meetFarmer && ( gwd.globalVars.saciWillyWilly ) ) {
      gwd.actions.timeline.gotoAndPlay("farmer-div", "farmer_falling_start");
      gwd.globalVars.score += 10;
      addScoreToBar(gwd.globalVars.score);
    }
    else {
      gwd.actions.timeline.gotoAndPlay("saci_perere_div", "collision-start");
  }

  if (document.getElementById("gained_score").style.width >= 68) {
    alert("Congratulations! You win the game. Keep saving the Amazon!");  
  }

}

function getXaxisPosition(objPositions) {
const {
  x, y, z
} = getTranslateValues(objPositions);
return(x);
}

function addScoreToBar(scoreGained) {
  var max_score = document.getElementById("max_score").offsetWidth;
  var gained_score = document.getElementById("gained_score").offsetWidth;
  var widthCurrent = document.getElementById("gained_score").style.width;
  
  switch ( true )  {
    case ( gwd.globalVars.score > 55 ):
      messageToUser = "Keep focused!";
    case ( gwd.globalVars.score > 50 && gwd.globalVars.score < 55):
        messageToUser = "Excellent! You are close to Amazon river :)";
        break;
    case ( gwd.globalVars.score > 30 && gwd.globalVars.score < 35):
        messageToUser = "Good mate!";
        break;
    case ( gwd.globalVars.score > 15 && gwd.globalVars.score < 20):
        messageToUser = "Be careful with Sucuri! Jump when need";
        break;  
    case ( gwd.globalVars.score > 10 && gwd.globalVars.score < 15):
         messageToUser = "Remember! 'Willy-Willy' do NOT save you from an Onça-pinatada";
        break;  
    case ( gwd.globalVars.score > 5  && gwd.globalVars.score < 10 ) :
        messageToUser = 'Great! Use "Willy-Willy" against the destroyers to get plus 10 points!';
        break;
    case ( gwd.globalVars.score > 3 ):
        messageToUser = "Good job! Keep going";
        break;                          
    default: {
      messageToUser = "";
    }
  }

    document.getElementById("messages").textContent = messageToUser;
  sleep(3000).then(() => {
    messageToUser=""; document.getElementById("messages").textContent = messageToUser; ; 
  });

  //widthCurrent = Math.trunc((gained_score / max_score) * 100);
  if ((gwd.globalVars.score) < 68 ) { // 68 is the max % of this div
    document.getElementById("gained_score").style.width =  gwd.globalVars.score + "%";
  }
  else {
    document.getElementById("gained_score").style.width =  "68%";
  }
  document.getElementById("score").textContent = gwd.globalVars.score;
}

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}