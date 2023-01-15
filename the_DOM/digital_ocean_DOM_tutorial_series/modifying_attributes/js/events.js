const p = document.querySelector('p');
const changeText = function() {

  p.textContent = 'I changed because of an inline event handler.';
};

const alertText = function() {
  alert('Hahahahahahah!');
};

const button = document.getElementById('myButton');
//button.onclick = changeText;
button.addEventListener('click', changeText);
button.addEventListener('mouseleave', alertText);
button.addEventListener('click', () => {
  p.textContent = 'Will I change?';
});

button.removeEventListener('mouseleave', alertText);
document.addEventListener('keydown', event => {
  console.log('key: ' + event.key);
  console.log('code: ' + event.code);
});
