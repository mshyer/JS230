let myPromise = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve('launch school');
  }, 2000);
});

myPromise.then((success) => {
  console.log(success);
});
