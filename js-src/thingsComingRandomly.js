var rand = Math.random() * 5;
if (rand > 0 && rand <= 1) {
  gwd.actions.timeline.gotoAndPlay("projecttile_path_div", "farmer_start_moving");
} else if (rand > 1 && rand <= 3) {
  gwd.actions.timeline.gotoAndPlay("projecttile_path_div", "onca_start_moving");
} else if (rand > 3 && rand <= 4) {
  gwd.actions.timeline.gotoAndPlay("projecttile_path_div", "sucuri_start");
} else {
  gwd.actions.timeline.gotoAndPlay("projecttile_path_div", "doingNothing");
}