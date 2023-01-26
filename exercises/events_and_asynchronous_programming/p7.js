//P1: add the highlight class
//  A: reset highlights
//    function removes highlight class
//      querySelectorAll(class)
//      remove the class
//  B: onclick for nav links
//      -reset the highlights
//      -The article in question is highlighted
//  C: onclick for main and NOT other elements
//      -Reset highlights
//      -main is highlighted

//P2: Scroll to wherever the user clicks
//  -In the nav click listener
//  -Broswer Object Model 
//  document.scrollTo(someElement.getBoundingClientRect()
let main = document.querySelector('main');
let linksList = document.querySelector('ul');

function resetHighlights() {
  let highlights = document.querySelectorAll('.highlight');
  highlights.forEach(highlightedElement => {
    highlightedElement.classList.remove('highlight');
  });
}
function getParentArticle(elem) {
  let current = elem;
  while (current.tagName !== 'ARTICLE') {
    current = elem.parentNode;
  }
  return current;
}
document.addEventListener('DOMContentLoaded', () => {
  resetHighlights();
  linksList.addEventListener('click', (event) => {
    resetHighlights();
    event.stopPropagation();
    //let articleString = linksList.firstElementChild.firstElementChild.textContent;
    let articleString = event.target.textContent;
    console.log(articleString);
    let toHighlight = document.querySelector('#' + articleString.toLowerCase().split(' ').join('-'));
    toHighlight.classList.add('highlight');
  });

  main.addEventListener('click', (event) => {
    resetHighlights();
    event.preventDefault();
    if (event.target.tagName !== 'MAIN') {
      event.stopPropagation();
      let parentArticle = getParentArticle(event.target);
      parentArticle.classList.add('highlight');
    } else {
      main.classList.add('highlight');
    }
  });
});
