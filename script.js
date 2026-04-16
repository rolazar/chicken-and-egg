//When the CHICKEN button is clicked...
onEvent("chickenButton", "click", function () {
  //... go to the CHICKEN screen.
  setScreen("chickenScreen.html");
});
//
// When the EGG button is clicked...
onEvent("eggButton", "click", function () {
  //... go to the EGG screen.
  setScreen("eggScreen.html");
  //... play the EGG sound.
  playSound("sound://category_puzzle/puzzle_game_crackle_05.mp3", false);
});
//
//When the EGG? button is clicked...
//... go to the EGG screen.
//... play the EGG sound.
//
//When the I DON'T KNOW button is clicked...
//... go to the HOME screen.
//... play the I DON'T KNOW sound.
//
//When the CHICKEN? button is clicked...
//... go to the CHICKEN screen.
//... play the CHICKEN sound.
