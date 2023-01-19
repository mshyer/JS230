let elem1 = document.querySelector('#elem1');

elem1.addEventListener('click', event => alert("bubbling"));
elem1.addEventListener('click', event => alert("capturing"), true);

// The event listener listening for a click event on elem1, set to listen on the capture phase, will fire first.
// The event listener listening for a click event on elem1 set to listen on the bubbling phase will fire second.
