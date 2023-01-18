//To be used with the codepen example

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded');
  document.addEventListener('click', (eve) => {
    console.log("click");
    console.log(eve.clientX);
    let myDiv = document.querySelector('.x');
    myDiv.style.top = String(eve.clientY) + 'px';
    myDiv.style.left = String(eve.clientX) + 'px'
  });

});
