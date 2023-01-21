const promises = [
  fetch('https://picsum.photos/200', {mode: "no-cors"}),
  fetch('https://does-not-exist', {mode: "no-cors"}),
  fetch('https://picsum.photos/100/200', {mode: "no-cors"})
]; //.map(p => p.catch(e => e));

console.log(promises[0]);
console.log(promises[0].catch(e => console.error(e)));
console.log(promises[1]);
console.log(promises[1].catch(e => e));
//Promise.all(promises).
//  then((results) => results.forEach((result) => console.log(result)));
