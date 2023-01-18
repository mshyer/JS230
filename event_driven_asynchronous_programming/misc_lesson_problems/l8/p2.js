//document.addEventListener('mouseenter', () => {
//  console.log('mouse has entered');
  document.addEventListener('mousemove', (eve) => {
    console.log("click");
    console.log(eve.clientX);
    let myDiv = document.querySelector('.x');
    myDiv.style.top = String(eve.clientY) + 'px';
    myDiv.style.left = String(eve.clientX) + 'px'
  });
  
//});
