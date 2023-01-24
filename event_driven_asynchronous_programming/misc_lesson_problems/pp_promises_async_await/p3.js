const promise = new Promise(function (resolve, reject) {
  resolve("I am a Promise");
});

promise.then(value => console.log(value));
console.log("I am NOT a Promise");

// The console.log(I am not a promise) runs first, as all synchronous code runs before asynchronous code.
