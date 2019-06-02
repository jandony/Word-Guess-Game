// Step 1 - Set all Global variables
    var totalWins = 0;
    var guesses = 10;
    var dashAmount = 0; // number of dashes (letters)
    var displayDash = []; // dashes to be displayed
    var wordArray = []; //splits each name into its own array - Array 1
    var letterGuessArray = []; // letterGuessArray needs to match wordArray - Array 2

    // Set all Game Choices as variables or arrays
        var superHeroes = ["hulk", "spiderman", "superman", "batman", "thor"]

    // Set variable to select a random superhero
    var superHero = superHeroes[Math.floor(Math.random() * superHeroes.length)];

    // Set all HTML sections we want to update (making shortcuts)
        var winsText = document.getElementById("wins");
        var currentWordText = document.getElementById("currentWord");
        var guessesText = document.getElementById("guessesRemaining");
        var letterGuessedText = document.getElementById("letterGuessed");



// Step 2 - Set all Global functions
    function gameSetUp() {
        // Set variable to select a random superhero
        superHero = superHeroes[Math.floor(Math.random() * superHeroes.length)];

        // Set each array value into its own array
        var wordArray = superHero.split("");

        // Set a variable to match the dashes to amount of letters
        dashAmount = wordArray.length;

        // Create a for loop for the amount of dashes per array value
        for (var i = 0; i < dashAmount; i++) {
            displayDash.push("_");
        }
        currentWordText.textContent = " " + displayDash.join(" ");

    }

    function reset() {
        gameSetUp();
        letterGuessArray = [];
        displayDash = [];
        guesses = 10;
    }

    function letterValidate(letter) {
        var lettersIncluded = false;

        for (var i = 0; i < dashAmount; i++) {
            if (superHero[i] == letter) {
                lettersIncluded = true;
            }
        }

        if (lettersIncluded) {
            for (var i = 0; i < dashAmount; i++) {
                if (superHero[i] == letter) {
                    dashAmount == letter;
                }
            }
        } else {
            guesses--;
            letterGuessedText.push("letterGuessed")
        }
    }

    function result() {
        if (wordArray === letterGuessArray) {
            totalWins++;
            reset();
        }

        if (guesses = 0) {
            reset();
        }
    }

// Call the Game Setup function
gameSetUp();




// Step 3 - The Game (main function)
document.onkeyup = function (event) {
    var userPress = event.key.toLowerCase();
    console.log(userPress)
    // Call the Letter Validate function
    letterValidate(userPress);

    // Call the Result function
    result();

    letterGuessedText.textContent = letterGuessed.join(" ");

}