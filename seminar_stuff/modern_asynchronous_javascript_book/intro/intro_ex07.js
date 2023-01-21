const promise = Promise.reject('Error!');

promise.catch((error) => {
  console.error(error); //errpr
});
