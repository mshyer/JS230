const promises = [
  Promise.reject(new Error('failure #1')),
  Promise.reject(new Error('failure #2')),
  Promise.resolve('YES!')
];

Promise.any(promises).then((result) => console.log(result));

const badPromises = [
  Promise.reject(new Error('failure 1')),
  Promise.reject(new Error('failure 2')),
  Promise.reject(new Error('failure 3')),
];

Promise.any(badPromises).then(
  (result) => {console.log(result)},
  (error) => {console.error(error.errors)}
);
