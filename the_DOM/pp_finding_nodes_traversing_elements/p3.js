const TOC = document.querySelectorAll('.toc')[0];

const TOCLinks = Array.from(TOC.children).filter(ele => ele instanceof HTMLAnchorElement);
// let linke = document.querySelectorAll('.toc a');

TOCLinks.forEach(link => {
  link.style.color = 'green';
});
