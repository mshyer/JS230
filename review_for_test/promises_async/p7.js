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

//'Calling resolveFunc causes the promise to become resolved, so that calling
//Resolvefunct or rejectFunc again has no effect.
//
//Got it!
