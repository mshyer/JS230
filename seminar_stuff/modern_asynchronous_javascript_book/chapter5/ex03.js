function fetchData() {
  const timeOut = 2000;
  const data = fetch('https://jsonplaceholder.typicode.com/todos/1');
  const failure = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Failed to retrieve data after ${timeOut} milliseconds`));
    }, timeOut);
  });
  return Promise.race([data, failure]);
}

fetchData().then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
