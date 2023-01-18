//To be used with Code Pen example html/css

const MAX_CHARACTERS = 180;

document.addEventListener('DOMContentLoaded', () => {
  charCounter = MAX_CHARACTERS;
  let charCountText = document.createElement('p');
  charCountText.textContent = '180 characters remaining!';
  document.querySelector('.composer').insertBefore(charCountText,
                          document.querySelector('button'));
  let textarea = document.querySelector('textarea');
  let text = textarea.value;
  textarea.addEventListener('keyup', eve => {
    charCounter -= 1;
    charCountText.textContent = `${charCounter} characters remaining!`;
    let invalid = charCounter < 0;
    button.disabled = invalid;
    textarea.ckassList.toggle('invalid', invalid);

    //if (charCounter < 0) {
    //  charCountText.style.color = 'red';
    //}
  });

});
