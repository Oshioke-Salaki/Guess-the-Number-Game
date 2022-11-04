'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function clickss() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    //When there is no input
    if (!guess) {
        displayMessage('⛔️ No number!');

        //When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;

            document.querySelector('.highscore').textContent = highScore;
        }

        //When guess is not correct
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess < secretNumber ? '📉 Too low!' : '📈 Too high!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
}

function startAgain() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    console.log(secretNumber);
}

document.querySelector('.check').addEventListener('click', clickss);

document.querySelector('.again').addEventListener('click', startAgain);