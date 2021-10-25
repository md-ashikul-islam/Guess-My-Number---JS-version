'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please Insert a Number! ⚠️';
  } else if (score >= 1) {
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number! 🎉';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too high! 👆';
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        document.querySelector('.message').textContent = 'You lost! ☹️';
      }
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too low! 👇';
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        document.querySelector('.message').textContent = 'You lost! ☹️';
      }
    }
  }
});
