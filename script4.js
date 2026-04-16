var timesMoved = 0;
hideElement("startOver");
//When the mouse hovers over the egg...
onEvent("catchImage", "mouseover", function () {
  //... if the egg is moved 5 times...
  if (timesMoved > 10) {
    //... make a sound...
    playSound(
      "https://codehs.com/uploads/dbf8b3b3a48bfd783986f0af4758fe6d",
      false,
    );
    //... display a message...
    setText("catchLabel", "You caught the egg!!!");
    showElement("startOver");
  } else {
    //... move the egg
    var x = randomNumber(-19, 19);
    var y = randomNumber(-37, 13);
    setProperty("catchImage", "x", x + "vh");
    setProperty("catchImage", "y", y + "vh");
    timesMoved = timesMoved + 1;
  }
});

onEvent("startOver", "click", function () {
  setScreen("index.html");
});
