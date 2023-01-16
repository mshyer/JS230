// Body children should be in order header main footer
let mainHeader = document.body.children[1];
let main = document.querySelector('main');

document.body.insertBefore(mainHeader, main);

//Move the h1 from main to header
let missingHeader = main.removeChild(main.firstElementChild);
mainHeader.insertBefore(missingHeader, mainHeader.firstElementChild);

//Move the two figure tags in main inside the article tag
let article = main.firstElementChild.firstElementChild;
let [babyMopFig, chinStickFig] = document.querySelectorAll('figure');
let [chinStick, babyMop] = document.querySelectorAll('figcaption');

article.appendChild(chinStickFig);
article.appendChild(babyMopFig);

babyMopFig.appendChild(babyMop);
chinStickFig.appendChild(chinStick);

