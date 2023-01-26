let main = document.querySelector('main');
let subSection = document.getElementById('sub');

main.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  alert(e.target.tagName);
});

subSection.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  e.stopPropagation();
  alert(e.target.tagName);
});
