trickyDiv.onclick = function(e) => {
  e.preventDefault();
  let notice = document.getElementById('notice');
  notice.setAttribute('class', 'hidden');
};
