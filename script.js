'use strict';

const checkBtn = document.querySelector('.check'),
    guessInput = document.querySelector('.guess'),
    message = document.querySelector('.message'),
    againBtn = document.querySelector('.again');

let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = text => {
    message.textContent = text
}



checkBtn.addEventListener('click', () => {
    console.log(typeof (+guessInput.value));
    let guessInputValue = +guessInput.value;
    if (!guessInputValue) {
        displayMessage('⛔️ No number!')
    } else {
        if (guessInputValue === secretNumber) {
            displayMessage('🎉 Correct Number!');
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (score < highScore) {
                document.querySelector('.highscore').textContent = highScore
            } else {
                document.querySelector('.highscore').textContent = score

            }
        } else if (guessInputValue !== secretNumber) {
            if (score > 1) {
                displayMessage(guessInputValue > secretNumber ? '📈 Too high!' : '📉 Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('💥 You lost the game!');
                document.querySelector('.score').textContent = 0;
            }


        }
    }

})

againBtn.addEventListener('click', () => {
    console.log('ok');
    score = 20;
    highScore = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore

    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage('Start guessing...');
    guessInput.value = ''
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';

})