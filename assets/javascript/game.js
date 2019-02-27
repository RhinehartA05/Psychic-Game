//Jurassic Park - Central Park Console


//HTML says "Guess what letter I'm thinking of?"
var letter = ['j','u','r','a','s','i','c','p','k']; //array of possible selections by computer 
var wins = 0; //The game notes player wins
var losses = 0; //The game notes player losts
var playerGuess = null;
var guessRemaining = 4; //The game notes guesses remaining


//id's needed for game
var textDir = document.getElementById("textDir");//Tells player directions
var playerPick = document.getElementById("playerPick");//Displays players mapped keys
var textWin = document.getElementById("textWin");//Displays players bypasses
var textLose = document.getElementById("textLose");//Displays players Permission Denied
var textGuess = document.getElementById("textGuess");//Displays players remaining bypass attempts.

document.onkeyup = function(event) {
    
    var playerGuess = event.key; //Which key is pressed.
    console.log(playerGuess); //log on the console

    var randomLet = Math.floor(Math.random() * letter.length); //picks random word
    var blank = letter[randomLet] //the random word will be equal to blank
    console.log(blank); //console shows random word which equals to blank
    
     // Reworked our code from last step to use "else if" instead of lots of if statements.

    // What happens if..    
    if ((playerGuess === "j") || 
    (playerGuess === "u") || 
    (playerGuess === "r") || (playerGuess === "a") || 
    (playerGuess === "s") || (playerGuess === "i") || 
    (playerGuess === "c") || (playerGuess === "p")|| 
    (playerGuess === "k")) {
    
  
      if ((blank === playerGuess)) {
        wins++;
        var para = document.createElement("p");
        var node = document.createTextNode("access: ACCEPTED " + playerGuess + " case letter match... total " + wins +" of 2");
        para.appendChild(node);
        var element = document.getElementById("textContent");
        element.appendChild(para);
        var audio = new Audio('Correct.mp3');
        audio.play()

        
    } if (blank !== playerGuess) {
        guessRemaining--;
        var para = document.createElement("p");
        var node = document.createTextNode("access: " + " PERMISSION DENIED.... " + playerGuess + " not a match.... attempts left: " + guessRemaining);
        para.appendChild(node);
        var element = document.getElementById("textContent");
        element.appendChild(para);
        var audio = new Audio('Denied.mp3');
        audio.play()
        
    } if (wins === 2){
      var para = document.createElement("p");
      var node = document.createTextNode("access: GRANTED");
      para.appendChild(node);
      var element = document.getElementById("textContent");
      element.appendChild(para);

      var para = document.createElement("p");
      var node = document.createTextNode("" + " .... welcome Dennis ");
      para.appendChild(node);
      var element = document.getElementById("textContent");
      element.appendChild(para);
      setTimeout(function(){ location.reload(); }, 16000);

      var para = document.createElement("p");
      var node = document.createTextNode("/centralpk:admin nedry.d$");
      para.appendChild(node);
      var element = document.getElementById("textContent");
      element.appendChild(para);
      var audio = new Audio('logged in.mp3');
        audio.play()
    } 
    
    if (guessRemaining === 0){
      var para = document.createElement("p");
      var node = document.createTextNode("access: PERMISSION DENIED...and..");
      para.appendChild(node);
      var element = document.getElementById("textContent");
      element.appendChild(para);
      var audio = new Audio('Denied-Failure.mp3');
        audio.play()
      
      
      for(var i = 0; i < 200; i++){
        var para = document.createElement("p");
        var node = document.createTextNode("YOU DIDN'T SAY THE MAGIC WORD!");
        para.appendChild(node);
        var element = document.getElementById("textContent");
        element.appendChild(para);
        setTimeout(function(){ location.reload(); }, 16000);
        
      };
      
    };

    } 
  };

  




