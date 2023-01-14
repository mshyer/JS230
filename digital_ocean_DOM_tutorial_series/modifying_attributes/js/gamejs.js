document.addEventListener('keydown', event => {
  var element = document.querySelector('p');

  var a = 'KeyA';
  var s = 'KeyS';
  var d = 'KeyD';
  var w = 'KeyW';

  switch (event.code) {
    case a:
      element.textContent = 'Left';
      break;
    case s:
      element.textContent = 'Down';
      break;
    case d:
      element.textContent = 'Right';
      break;
    case w:
      element.textContent = 'Up';
      break;
  }
});
