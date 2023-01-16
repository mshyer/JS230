let trickyDiv = document.getElementById('notice');

let linky = document.getElementById('toggle');

linky.onclick = function(e) {
  e.preventDefault();

  let status = trickyDiv.getAttribute('class');
  if (status === 'hidden') {
    trickyDiv.setAttribute('class', 'visible');
  } else {
    trickyDiv.setAttribute('class', 'hidden');
  }
};
