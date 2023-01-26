
// const makeBold = function(element, callback) {
//   element.style.fontWeight = 'bold';
//   if (typeof callback === 'function') {
//     callback(element);
//   }
// };

//FURTHER EXPLORATION
let sectionElement = document.querySelector('section');

let boldAfter = new CustomEvent('bolded', {
  detail: {
    highlight(target) {
      target.classList.add('highlight');
    },
    shout(target) {
      target.classList.add('shout');
    }
  },
});

sectionElement.addEventListener('bolded', (e) => {
  e.detail.highlight(e.target);
});

const makeBold = function(element) {
  element.style.fontWeight = 'bold';
  element.dispatchEvent(boldAfter);
};

makeBold(sectionElement);
