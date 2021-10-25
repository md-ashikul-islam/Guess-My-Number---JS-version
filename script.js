'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please Insert a Number! ⚠️';
  } else if (score >= 1) {
    //when player wins
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number! 🎉';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    //when guess is too high
    else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too high! 👆';
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        document.querySelector('.message').textContent = 'You lost! ☹️';
      }
    }
    //when guess is too low
    else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too low! 👇';
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        document.querySelector('.message').textContent = 'You lost! ☹️';
      }
    }
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
