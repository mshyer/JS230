const pErr = new Promise((resolve, reject) => {
  reject('Always fails');
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Slowly resolves, should never work');
  }, '500');
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'done quick');
});

Promise.any([pErr, pSlow, pFast]).then(value => {
  console.log(value);
});
