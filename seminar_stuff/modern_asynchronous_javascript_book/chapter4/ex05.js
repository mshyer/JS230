const apis = [
  'https://eloux.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/1'
];

async function fetchData(api) {
  const response = await fetch(api);
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(new Error('Request failed'));
  }
}

function getData() {
  return Promise.any([
    fetchData(apis[0]),
    fetchData(apis[1])
  ]).catch(() => {
    return Promise.reject(
      new Error('Unable to access the API')
    );
  });
}

getData().then((response) => console.log(response.title));
