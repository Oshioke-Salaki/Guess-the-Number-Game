'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

let score = Number(document.querySelector('.score').textContent);

function clickss() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
        }
    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
        }
    }
}

document.querySelector('.check').addEventListener('click', clickss);