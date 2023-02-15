let badPromise = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error('Error: Not Launch School'));
  }, 2000);
});

badPromise.then((success) => {
  console.log(success);
}).catch((error) => {
  console.error(error);
});

