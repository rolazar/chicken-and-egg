//... play the EGG sound.
playSound("https://codehs.com/uploads/86b1b95fdb8ff32ea7724c4e92ad4133", false);

//When the CHICKEN button is clicked...
onEvent("chickenButton", "click", function( ) {
  //... go to the CHICKEN screen.
  setScreen("chickenScreen.html");
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
onEvent("iDontKnowEgg", "click", function( ) {
  //... go to the CATCH screen.
  setScreen("catchScreen.html");
  //... play the I DON'T KNOW sound.
});