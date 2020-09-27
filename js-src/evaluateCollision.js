var pathWidth = document.getElementById("game_main_div").offsetWidth;
var saciWidth = document.getElementById("saci_perere_div").offsetWidth;
var max_score = document.getElementById("max_score").offsetWidth;
var gained_score = document.getElementById("gained_score").offsetWidth;
var widthCurrent = document.getElementById("gained_score").style.width;
var farmer = document.getElementById("farmer-div");
const {
  x, y, z
} = getTranslateValues(farmer);
var xPositionOftheFarmer = x;
var distance = pathWidth - (xPositionOftheFarmer * (-1));
document.getElementById("messages").textContent = "pathWidth = " + pathWidth 
+ ", saciWidth = " + saciWidth 
+ ", Farmer x: " + xPositionOftheFarmer 
+ " distance: " + distance 
+ " max_score: " + max_score 
+ " gained_score: " + gained_score
+ " widthCurrent: " + widthCurrent;

if (distance >= 0 && distance <= 100) {
  if (!gwd.glovalVars.saciWillyWilly) {
    gwd.actions.timeline.gotoAndPlay("saci_perere_div", "collision-start");
  } else { 
    widthCurrent = Math.trunc((gained_score / max_score) * 100);
    if ((widthCurrent + 1) < 68 ) { // 68 is the max % of this div
      document.getElementById("gained_score").style.width =  (widthCurrent + 1) + "%";
    }
    else {
      alert("Congratulations! You win the game. Keep saving the Amazon!");  
    }
    gwd.actions.timeline.gotoAndPlay("farmer-div", "farmer_falling_start");
  }
}

