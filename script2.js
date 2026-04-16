//... play the CHICKEN sound.
playSound("https://codehs.com/uploads/860745f30bd6e2846e2ff25d6e33b996", false);

// When the EGG button is clicked...
onEvent("eggButton", "click", function( ) {
  //... go to the EGG screen.
  setScreen("eggScreen.html");
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
// 
//When the I DON'T KNOW button is clicked...
onEvent("iDontKnowChicken", "click", function( ) {
  //... go to the CATCH screen.
  setScreen("catchChicken.html");
  //... play the I DON'T KNOW sound.
});