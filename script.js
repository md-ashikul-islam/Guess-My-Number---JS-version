'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When no input
  if (!guess) {
    displayMessage('Please Insert a Number! ⚠️');
  } else if (score >= 1) {
    //when guess is right!
    if (guess === secretNumber) {
      displayMessage('Correct Number! 🎉');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      //when guess is wrong!
    } else if (guess != secretNumber) {
      displayMessage(guess > secretNumber ? 'Too high! 👆' : 'Too low! 👇');
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        displayMessage('You lost!😞');
      }
    }
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing...') ;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
