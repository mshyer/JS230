document.querySelector('html').addEventListener('click', (event) => {
  const container = document.querySelector('#container');

  if (!container.contains(event.target) {
    document.querySelector('#container').style = 'display: none';
  }
});

// document.querySelector('#container').addEventListener('click', event => {
//   event.stopPropagation();
// });
