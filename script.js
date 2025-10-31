// 🎯 High-Low Number Guessing Game
// You will use prompt(), alert(), and confirm() to make an interactive guessing game!

function playHighLowGame() {

  // tracking only one item, tries
  let tries = 0;
  let keepGuessing = true;

  // Welcome
  window.alert("🎮 Welcome to the High-Low Number Guessing Game!");
  window.alert("I'm thinking of a number between 1 and 100...");

  // Create a variable for computer chosing number 1-100
  let targetNumber = Math.floor(Math.random() * 100) + 1;

  console.log(`Generate a random number (1-100): ${targetNumber}`)

  // begin while loop
  while (keepGuessing) {

    // Create a variable to track how many guesses the player has made
    let usrGuess = window.prompt("What number am I thinking of?");
    usrGuess = parseInt(usrGuess);

    if (typeof (usrGuess) == "string") {
      window.alert(`That is not a number. Please guess a number 1-100.`);
    }

    if (!usrGuess) {
      window.alert(`Not playing Aaaw!`);
      break;
    }

    tries++;

    console.log(`tries: ${tries}`)
    console.log(`You Guessed: ${usrGuess}`)
    console.log(`usrGuess: ${usrGuess} | typeof: ${typeof (usrGuess)}`)
    console.log(`targetNumber: ${targetNumber} | typeof: ${typeof (targetNumber)}`)

    if (usrGuess === targetNumber) {
      console.log(`Guess: ${usrGuess} is correct.`)
      window.alert(`You got it? That's my number! It only took you ${tries} tries.`);
      break;
    } else if (usrGuess !== targetNumber) {

      if (usrGuess > targetNumber) {
        window.alert(`Try: ${tries} | You guessed: ${usrGuess}.. too high. Guess Again.`);
        console.log(`Guess: ${usrGuess} is incorrect .. too high`);
      } else if (usrGuess < targetNumber) {
        window.alert(`Try: ${tries} | You guessed: ${usrGuess}.. too low. Guess Again.`);
        console.log(`Guess: ${usrGuess} is incorrect .. too low`);
      }
    }
  } // end while

  let playAgain = window.confirm("Would you like to play again?");
  if (playAgain == true) {
    playHighLowGame();
  } else {
    window.alert("Thanks for playing!");
  }

} // end function

// 🚀 Call the function to start the game
playHighLowGame();
