Guess the Number Game Code
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Guess the Number Game</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    margin-top: 50px;
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #555;
                }
                .form {
                    margin: 20px 0;
                }
                .guessField {
                    padding: 10px;
                    font-size: 16px;
                }
                .guessSubmit {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #28a745;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                .guessSubmit:hover {
                    background-color: #218838;
                }
                .resultParas {
                    margin-top: 20px;
                }
                .guesses {
                    color: #333;
                }
                .lastResult {
                    color: #333;
                    font-weight: bold;
                }
                .lowOrHi {
                    color: #d9534f;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Guess the Number Game</h1>
                <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>
                <div class="form">
                    <label for="guessField">Enter a guess: </label>
                    <input type="number" id="guessField" class="guessField">
                    <input type="submit" value="Submit guess" class="guessSubmit">
                </div>
                <div class="resultParas">
                    <p class="guesses"></p>
                    <p class="lastResult"></p>
                    <p class="lowOrHi"></p>
                </div>
            </div>

            <script>
                // Generate a random number between 1 and 100
                const randomNumber = Math.floor(Math.random() * 100) + 1;

                // Initialize variables
                let guessCount = 1;
                const guesses = document.querySelector('.guesses');
                const lastResult = document.querySelector('.lastResult');
                const lowOrHi = document.querySelector('.lowOrHi');
                const guessSubmit = document.querySelector('.guessSubmit');
                const guessField = document.querySelector('.guessField');

                // Function to check the guess
                function checkGuess() {
                    const userGuess = Number(guessField.value);

                    if (guessCount === 1) {
                        guesses.textContent = 'Previous guesses: ';
                    }
                    guesses.textContent += userGuess + ' ';

                    if (userGuess === randomNumber) {
                        lastResult.textContent = 'Congratulations! You got it right!';
                        lastResult.style.backgroundColor = 'green';
                        lowOrHi.textContent = '';
                        setGameOver();
                    } else if (guessCount === 10) {
                        lastResult.textContent = '!!!GAME OVER!!!';
                        lowOrHi.textContent = '';
                        setGameOver();
                    } else {
                        lastResult.textContent = 'Wrong!';
                        lastResult.style.backgroundColor = 'red';
                        if (userGuess < randomNumber) {
                            lowOrHi.textContent = 'Last guess was too low!';
                        } else if (userGuess > randomNumber) {
                            lowOrHi.textContent = 'Last guess was too high!';
                        }
                    }

                    guessCount++;
                    guessField.value = '';
                    guessField.focus();
                }

                // Event listener for the submit button
                guessSubmit.addEventListener('click', checkGuess);

                // Function to end the game
                function setGameOver() {
                    guessField.disabled = true;
                    guessSubmit.disabled = true;
                    const resetButton = document.createElement('button');
                    resetButton.textContent = 'Start new game';
                    resetButton.style.padding = '10px 20px';
                    resetButton.style.fontSize = '16px';
                    resetButton.style.backgroundColor = '#007bff';
                    resetButton.style.color = 'white';
                    resetButton.style.border = 'none';
                    resetButton.style.cursor = 'pointer';
                    resetButton.addEventListener('click', resetGame);
                    document.querySelector('.container').appendChild(resetButton);
                }

                // Function to reset the game
                function resetGame() {
                    guessCount = 1;
                    const resetParas = document.querySelectorAll('.resultParas p');
                    for (const resetPara of resetParas) {
                        resetPara.textContent = '';
                    }
                    guessField.disabled = false;
                    guessSubmit.disabled = false;
                    guessField.value = '';
                    guessField.focus();
                    lastResult.style.backgroundColor = 'white';
                    randomNumber = Math.floor(Math.random() * 100) + 1;
                    document.querySelector('.container button').remove();
                }
            </script>
        </body>
        </html>
    