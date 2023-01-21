let wiki = fetch('https://www.wikipedia.org');
let korean = fetch('https://afreecatv.com');
let uk = fetch('https://bbc.co.uk');

// wiki.then((result) => {
//   return console.log(result.status);
// }, (error) => {
//   console.error(error);
// });
// 
// korean.then((result) => {
//   return console.log(result.status);
// }, (error) => {
//   console.error(error);
// });
// 
// uk.then((result) => {
//   return console.log(result.status);
// }, (error) => {
//   console.error(error);
// });

Promise.race([wiki, korean, uk]).then((value) => {
  console.log(value.url);
});

Promise.all([wiki, korean, uk]).then((values) => {
  values.forEach(response => {
    console.log(response.status);
  });
});

console.log('exited');
