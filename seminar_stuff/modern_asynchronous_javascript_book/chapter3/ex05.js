const promises = [
  fetch('https://picsum.photos/200', {mode: "no-cors"}), 
  fetch('https://does-not-exist', {mode: "no-cors"}),
  fetch('https://picsum.photos/100/200', {mode: "no-cors"})
];

Promise.all(promises).
  then((results) => results.forEach((result) => console.log(result)));
