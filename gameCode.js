function playCraps() {
    //https://github.com/Abbystarchild/CSC102week2ASTAR
    //this is a function to play Craps in the game.html
    // for craps, sum of 7 or 11 is a loss, doubles that are even win!
    console.log("playCraps() started");
    //calculate die 1
    var die1 = Math.ceil(Math.random() * 6);
    console.log("die1 result = " + die1);
    document.getElementById("die1Res").innerHTML = "= " + die1;
    // calculate die 2
    var die2 = Math.ceil(Math.random() * 6);
    console.log("die2 result = " + die2);
    document.getElementById("die2Res").innerHTML = "= " + die2;
    // adds the two die together with a sum
    var sum = die1 + die2;
    console.log("sum result = " + sum);
    document.getElementById("sumRes").innerHTML = "= " + sum;

    // check for 7 or 11 meaning loss
    if (sum == 7 || sum == 11) {
        document.getElementById("gameRes").innerHTML =
            "You lost some coin!"
    } //check for doubles and even for the win
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("gameRes").innerHTML =
            "You won yourself some of the captain's coin."

     // did not win, did not lose so a push
    }else {
        document.getElementById("gameRes").innerHTML =
            "You might want to draw a blade."
    }
}

