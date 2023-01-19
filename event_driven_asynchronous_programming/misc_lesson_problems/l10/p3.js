let elem1 = document.querySelector('#elem1');

document.addEventListener('keypress', event => {
  setTimeout(() => alert(event.code), 7000);
});

elem1.addEventListener('click', event => {
  setTimeout(() => alert(event.target.tagName), 7000);
});

// Which event listener fires first will depend on what the user does. The click event is listening 
//   for a mouse click. The keypress event is listening for a keyboard action. 
//
// In the video, the frantic author of this problem clicked on div 1, then types 2 chars into the input element
//   then clicks div4.
// The listeners will both fire on the bubbling phase, in the order the user did them.
// In this case, the second listener will fire, then the first will fire twice, then the second again.
//   -This will trigger alerts that are set to fire after a timer. The alerts will also appear in order, as the
//   timeouts are set to 7000 ms each.
