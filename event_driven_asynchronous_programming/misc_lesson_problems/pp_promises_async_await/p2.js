let notTheBestSchool = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject('Error: Not Launch School');
  });
}).then(success => {
  console.log(success);
}).catch(error => {
  console.error(error);
});
