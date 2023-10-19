// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get DOM elements
const guessSubmit = document.getElementById("guessSubmit");
const guessField = document.getElementById("guessField");
const message = document.querySelector(".message");

let attempts = 0;

// Event listener for the "Submit Guess" button
guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
    const userGuess = Number(guessField.value);
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
        message.style.color = "green";
        endGame();
    } else if (userGuess < randomNumber) {
        message.textContent = "Try a higher number.";
        message.style.color = "red";
    } else {
        message.textContent = "Try a lower number.";
        message.style.color = "red";
    }

    guessField.value = "";
    guessField.focus();
}

function endGame() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
}
