let elem1 = document.querySelector('#elem1');

elem1.addEventListener('click', event => alert(event.target.tagName));
elem1.addEventListener('click', event => alert(event.currentTarget.tagName));

// The click event listener listening on the bubbling phase that alerts the target's tagName will fire first
// 2: the click event listener listening on the bubbling phase that alert's the currentTarget's tagname listening
//    -On the 'div' element will fire second. 
