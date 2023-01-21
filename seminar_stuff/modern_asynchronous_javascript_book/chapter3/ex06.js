const promises = [
  Promise.resolve(1),
  Promise.resolve(2)
];

Promise.allSettled(promises).then(results => {
  results.forEach(result => {
    console.log(result);
  });
});
