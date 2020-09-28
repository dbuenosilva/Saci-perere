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

document.getElementById("messages").textContent = " "  
+ " saci_perere_divTop = " + saciTop 
+ " xDistanceFromFarmer = " + xDistanceFromFarmer 
+ " xDistanceFromOnca: " + xDistanceFromOnca 
+ " xDistanceFromSucuri: " + xDistanceFromSucuri;

var meetFarmer = (xDistanceFromFarmer >= 0 && xDistanceFromFarmer <= SAFE_DISTANCE);
var meetOnca   = (xDistanceFromOnca >= 0 && xDistanceFromOnca <= SAFE_DISTANCE);
var meetSucuri = (xDistanceFromSucuri >= 95 && xDistanceFromSucuri <= SAFE_DISTANCE);
var saciIsSafe = (saciTop >= SAFE_DISTANCE);

if (meetFarmer || meetOnca || meetSucuri ) {

    if (saciIsSafe) {
      addScore(1);
    }
    else if (meetFarmer && ( gwd.glovalVars.saciWillyWilly ) ) {
      gwd.actions.timeline.gotoAndPlay("farmer-div", "farmer_falling_start");
      addScore(10);
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

function addScore(scoreGained) {
  var max_score = document.getElementById("max_score").offsetWidth;
  var gained_score = document.getElementById("gained_score").offsetWidth;
  var widthCurrent = document.getElementById("gained_score").style.width;
  
  widthCurrent = Math.trunc((gained_score / max_score) * 100);
  if ((widthCurrent + 1) < 68 ) { // 68 is the max % of this div
    document.getElementById("gained_score").style.width =  (widthCurrent + scoreGained) + "%";
  }
}