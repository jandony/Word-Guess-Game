// Set all Global variables
var totalWins = 0;
var guesses = 10;
var dashAmount = 0; // number of dashes (letters)
var displayDash = []; // dashes to be displayed
var wordLetters = []; //splits each name into its own array
var guessedLetters = []; // guessed letters needs to match wordLetters

userGuess = event.key;

// Set all Game Choices as variables or arrays
var superHeroes = ["hulk", "spiderman", "superman", "batman", "thor"]

// Randomize the computer's guess
var computerGuess = superHeroes[Math.floor(Math.random() * superHeroes.length)];

// Set all all HTML sections we want to update (making shortcuts)
var winsText = document.getElementById("wins");
var currentWordText = document.getElementById("currentWord");
var guessesText = document.getElementById("guessesRemaining");
var letterGuessedText = document.getElementById("letterGuessed");

// Step 1 - Set all Global functions
function gameSetUp() {
    // Set random variable for all superHeroes 
    var superHero = superHeroes[Math.floor(Math.random() * superHeroes.length)];

    // Set each array value into its own array
    var wordLetters = superHero.split("");

    // Set a variable to match the dashes to amount of letters
    dashAmount = wordLetters.length;

    // Create a for loop for the amount of dashes per array value
    for (var i = 0; i < dashes; i++) {
        displayDash.push("_");
    }
    currentWordText.innerHTML = " " + displayDash.join(" ");

}

function reset() {
    // updating the HTML to reflect the new variable values
    gameSetUp();
    guessedLetters = [];
    displayDash = [];
    guesses = 10;
}

function letterValidate (letter) {
    var lettersIncluded = false;

    for (var i = 0; i < dashAmount; i++) {
        if (superHero[i] == letter) {
            lettersIncluded = true;
        }
    }

    if (lettersIncluded) {
        for (var i = 0; i < dashAmount; i++) {
            if(superhero[i] == letter) {
                dashAmount == letter;
            }
        }
    } else {
        guesses--;
        letterGuessedText.push(letterGuessed)
    }
}


// The Game (main function)
document.onkeyup = function (event) {
    userGuess = event.key;

    // Compare 


    // 


    // 

    
}