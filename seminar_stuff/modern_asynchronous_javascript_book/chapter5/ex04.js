function loadFromCache() {
  const data = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  };
  return new Promise((resolve) => {
    resolve(data);
  });
}

function fetchData() {
  const timeOut = 2000;
  const cache = loadFromCache().then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, timeOut);
    });
  });
  const freshData = fetch('https://jsonplaceholder.typicode.com/todos/1');
  return Promise.race([freshData, cache]);
}

fetchData().then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
