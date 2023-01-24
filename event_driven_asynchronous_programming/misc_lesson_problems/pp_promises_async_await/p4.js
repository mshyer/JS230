const promise1 = new Promise((resolve, reject) => {
  console.log("foo");
  resolve();
  console.log("bar");
});

promise1.then(() => {
  console.log("baz");
});

console.log("qux");

// First, the promises callback is run on line 1
// We log foo first,
// Then the promise1 is marked as resolved, but doesn't do anything else
// Then we log bar
//
// The promise1.then is run asynchronously, and so doesn't fire until the synchronous code is finished on the call stack.
//
// Then we log qux
//
// Then we fire the asynchronous code and fire baz.
