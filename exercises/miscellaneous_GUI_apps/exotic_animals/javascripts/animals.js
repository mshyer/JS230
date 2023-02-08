document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('photogrid').addEventListener('mouseover', (event) => {
    let delay = 500;
    console.log(event.target.tagName);
    if (event.target.tagName === 'IMG') {
      //set a listener for mouse leave on the target img (once)
      // clear timeout if the mouse leaves
      let hoverTimeout = setTimeout(() => {
        //after the delay, make the figcaption visible
        let figcaption = event.target.parentElement.querySelector('figcaption');
        figcaption.style.display = 'block';
        //then add a listener for mouseleave (once)
        event.target.addEventListener('mouseleave', () => {
          figcaption.style.display = 'none';

        }, {once: true});
        //Once the mouse leaves, make the figcaption hidden again

      }, delay);

      event.target.addEventListener('mouseleave', (event) => {
        clearTimeout(hoverTimeout);
      }, {once: true});
    }
  });
});
