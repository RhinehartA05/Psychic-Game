//The Psychic Game

//id's needed for game
let textDir = document.getElementById("#id")
let playerPick = document.getElementById("#id")
let comPick = document.getElementById("#id")
let textWin = document.getElementById("#id")
let textLose = document.getElementById("#id")
let textTie = document.getElementById("#id")

//HTML says "Guess what letter I'm thinking of?"
let letter = ['a']; 

//The game notes player wins
let wins = 0;
//The game notes player losts
let losses = 0;
//The game notes guesses remaining
let guessRemaining = 0;
//The game notes what the player has guessed.
document.onkeyup = function(event) {
let playerGuess = event.key;

let random = Math.floor(Math.random() * letter.length); //picks random word
let blank = letter[random] //the random word will be equal to blank
console.log(blank); //console shows random word which equals to blank

if (playerGuess === comPick) {
    alert("They Match");
};



};



//,'d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'