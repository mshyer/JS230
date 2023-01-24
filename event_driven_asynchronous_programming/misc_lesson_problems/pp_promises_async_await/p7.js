const promise = new Promise((resolve, reject) => {
  resolve("Got it!");
  reject("Oops.");
  resolve("Again!");
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//I think because resolve does not stop execution in the callback,
//The promise will be set to resolve, then reject, then resolve to "again".
//
//Then we log the result 'again'
//WRONG!
//Once a promise is resolved or rejected, any aditional attempts to settle it will fail silently
//The other two rejhect and resolve invocations fail silently and are ignored.
//
