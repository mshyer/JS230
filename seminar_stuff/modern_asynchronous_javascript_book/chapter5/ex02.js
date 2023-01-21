Promise.race('').then((response) => {
  // Surprise, this will never happen
  console.log('mozarella cheese');
}).catch((error) => {
  //nor this;
});
