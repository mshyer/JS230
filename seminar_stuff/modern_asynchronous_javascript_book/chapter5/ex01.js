const promiseA = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'A');
});

const promiseB = new Promise((resolve) => {
  setTimeout(resolve, 2000, 'B');
});

Promise.race([
  promiseA,
  promiseB
]).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

Promise.any([
  promiseA,
  promiseB
]).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
