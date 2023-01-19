document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');
  let content = document.querySelector('.content');
  let cursorInterval;
  let focusedTextField = false;

  textField.addEventListener('click', event => {
    event.stopPropagation();
    // clearInterval(cursorInterval);
    textField.classList.add('focused');
    focusedTextField = true;
    cursorInterval = cursorInterval || setInterval(() => {
      textField.classList.toggle('cursor');
    }, 500);
  });

  document.addEventListener('click', event => {
    textField.classList.remove('focused', 'cursor');
    focusedTextField = false;
    clearInterval(cursorInterval);
    cursorInterval = null;
  });

  document.addEventListener('keydown', event => {
    let key = event.key;
    let text = content.textContent;
    if (!focusedTextField) {
      return;
    }
    console.log(key);
    if (key === 'Backspace') {
      content.textContent = text.slice(0, -1);
    } else {
      content.textContent = text + key; 
    }
  });
});
