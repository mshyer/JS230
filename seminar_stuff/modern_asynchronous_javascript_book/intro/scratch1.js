const promise = Promise.resolve(10);

promise.then((data) => {
  console.log(data);
});

const badPromise = Promise.reject('Error!');

badPromise.then(null, (error) => {
  console.error(error);
});
