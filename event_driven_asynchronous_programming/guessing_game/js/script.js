let guesses = 0;
function setMessage(guess, answer) {
  if (guess < answer) {
    return 'Too low!';
  } else if (guess > answer) {
    return 'Too high!';
  } else if (guess === answer) {
    return 'You guessed it boyo! It took you ' + guesses + ' guesses. Not bad!';
  } else {
    return 'uh oh';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const MAX_GUESS = 100;
  let answer = Math.ceil(Math.random() * MAX_GUESS);

  let submitInput = document.querySelector('fieldset').lastElementChild;
  let textInput = document.querySelector('#guess');
  let guess;
  let form = document.querySelector('form');
  let resultP = document.querySelector('p');
  let newGame = document.querySelector('#newgame');

  form.addEventListener('submit', (eve) => {
    eve.preventDefault();
    guess = parseInt(textInput.value, 10);
    let message;
    guesses += 1;
    message = setMessage(guess, answer);
    if (guess === answer || guess === 101) {
      submitInput.disabled = true;
      textInput.disabled = true;
    }
    resultP.textContent = message;
  });

  newGame.addEventListener('click', eve => {
    alert('new game!');
    answer = Math.ceil(Math.random() * MAX_GUESS);
    textInput.value = '';
    resultP.textContent = 'Guess a number, any number.';
    guesses = 0;
    submitInput.disabled = false;
  });



});
