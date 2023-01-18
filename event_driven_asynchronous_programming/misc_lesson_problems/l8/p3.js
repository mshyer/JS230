//to be used with Code Pen example
function changeXColor(color) {
  let horizontalLine = document.querySelector('.horizontal');
  let verticalLine = document.querySelector('.vertical');
  horizontalLine.style.background = color;
  verticalLine.style.background = color;
}

document.addEventListener('keypress', ele => {
  let key = ele.key;
  console.log(key);
  if (key === 'b') {
    changeXColor('blue');
  } else if (key === 'g') {
    changeXColor('green');
  } else if (key === 'r') {
    changeXColor('red');
  }
});
