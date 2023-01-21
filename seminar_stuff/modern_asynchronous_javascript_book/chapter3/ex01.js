const promises = [
  Promise.reject(new Error('failure #1')),
  Promise.reject(new Error('failure #2')),
  Promise.resolve('YES!')
];

console.log(promises);
