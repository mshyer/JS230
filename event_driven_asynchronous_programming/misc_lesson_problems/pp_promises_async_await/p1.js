let theBestSchool = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Launch School');
  }, 2000);
});

theBestSchool.then(resolve => {
  console.log(resolve);
});
