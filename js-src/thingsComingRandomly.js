var rand = Math.random() * 4;
if (rand > 0 && rand <= 1) {
  gwd.actions.timeline.gotoAndPlay("projecttile_path_div", "farmer_start_moving");
} else if (rand > 1 && rand <= 3) {
  gwd.actions.timeline.gotoAndPlay("projecttile_path_div", "onca_start_moving");
} else {
  gwd.actions.timeline.gotoAndPlay("projecttile_path_div", "doingNothing");
}