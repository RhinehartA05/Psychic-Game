//The Psychic Game - jurassic park

//HTML says "Guess what letter I'm thinking of?"
let letter = ['j','u','r','a','s','i','c','p','k',]; //array of possible selections by computer
let wins = 0; //The game notes player wins
let losses = 0; //The game notes player losts
let playerGuess = null;
let guessRemaining = 0; //The game notes guesses remaining



//id's needed for game
let textDir = document.getElementById("textDir");//Tells player directions
let playerPick = document.getElementById("playerPick");//Displays players mapped keys
let textWin = document.getElementById("textWin");//Displays players bypasses
let textLose = document.getElementById("textLose");//Displays players Permission Denied
let textGuess = document.getElementById("textGuess");//Displays players remaining bypass attempts.

// let newPara = document.createElement("p");
// let textPara = document.createTextNode("Input correct case letter to bypass");
// newPara.appendChild(textPara);
// let element = document.getElementById("consoleText");


document.onkeyup = function(event) {
    
    
    let playerGuess = event.key; //Which key is pressed.
    console.log(playerGuess); //log on the console

    let randomLet = Math.floor(Math.random() * letter.length); //picks random word
    let blank = letter[randomLet] //the random word will be equal to blank
    console.log(blank); //console shows random word which equals to blank
    
     // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((playerGuess === "j") || 
    (playerGuess === "u") || 
    (playerGuess === "r") || (playerGuess === "a") || 
    (playerGuess === "s") || (playerGuess === "i") || 
    (playerGuess === "c") || (playerGuess === "p")|| 
    (playerGuess === "k")) {

      

      if ((playerGuess === blank)) {
        alert("bypass");
      } else if (playerGuess !== blank) {
        alert("PERMISSION DENIED.");
      } else {
        alert("non imput: PERMISSION DENIED.")
      }

      
      // Display the user and computer guesses, and wins/losses/ties.
      playerPick.textContent = "You chose: " + playerGuess;
      textWin.textContent = "wins: " + wins;
      textLose.textContent = "losses: " + losses;
      
    }
  };









// } 
// else {
//     if (playerGuess !== blank){
//         losses++;
//         document.write('<h1>You guess it Rwrong!</h1>');

//     }
// }

///////////////////////////////

//,'d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'




// //Letter choices available
// var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// //Setting all to zero
// let wins = 0;
// let losses = 0;
// let guesses = 9;
// let guessesLeft = 9;
// let guessedLetters = [];
// var letterToGuess = null;
// var yay = new Audio("./assets/sounds/success.mp3");
// var boo = new Audio("./assets/sounds/failure.mp3");
// var ouch = new Audio("./assets/sounds/wrongKey.wav");

// //Lets the computer select a random letter from the available choices
// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// document.querySelector('.mantis').style.display = "none";
// //Allows the user 9 guesses
// // guesses = guesses || 9
// function updateGuessesLeft() {
//     // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
//     document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
// };

// function updateLetterToGuess() {
//     this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
// };

// function updateGuessesSoFar() {
//     // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
//     document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
// };
// // Function will be called when we reset everything
// var reset = function() {
//     totalGuesses = 9;
//     guessesLeft = 9;
//     guessedLetters = [];
//     setTimeout(function() { document.querySelector('.mantis').style.display = 'none'; }, 5000);
//     updateLetterToGuess();
//     updateGuessesLeft();
//     updateGuessesSoFar();
// }

// updateLetterToGuess();
// updateGuessesLeft();

// //When key is released it becomes the users guess
// document.onkeyup = function(event) {
//     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//     var check = computerChoices.includes(userGuess);

//     if (check === false) {
//         ouch.play();
//         alert("That was not a valid guess, try again?");
//         return false;
//     } else if (check === true) {
//         //If the Users choice was an alphabet char then update guesses left and add users guess to the array of guessed letters
//         guessesLeft--;
//         guessedLetters.push(userGuess);
//         updateGuessesLeft();
//         updateGuessesSoFar();

//         if (guessesLeft > 0) {
//             if (userGuess == letterToGuess) {
//                 wins++;
//                 yay.play();
//                 document.querySelector('#wins').innerHTML = "Wins: " + wins;
//                 userGuess = userGuess.toUpperCase();
//                 document.querySelector('.mantis').style.display = '';
//                 document.querySelector('.mantis').style.height = '4em';
//                 document.querySelector('.mantis').innerHTML = "Good guess wee grasshopper " + userGuess + " was the letter I was thinking of!";
//                 reset();
//             }
//         } else if (guessesLeft == 0) {
//             // Then we will loss and we'll update the html to display the loss 
//             losses++;
//             boo.play();
//             document.querySelector('#losses').innerHTML = "Losses: " + losses;
//             document.querySelector('.mantis').style.display = '';
//             document.querySelector('.mantis').innerHTML = "Sorry grasshopper, I was thinking of the letter " + letterToGuess;
//             // Then we'll call the reset. 
//             reset();

//         }
//         return false;
//     } else {
//         alert("Oops, we have an error");
//     }

// };