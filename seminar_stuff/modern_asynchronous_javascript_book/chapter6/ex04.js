const src = 'https://eloux.com/todos/1';
const controller = new AbortController();
const signal = controller.signal;

fetch(src, {signal})
  .then(response => {
    return response.json();
  }).then(json => {
    console.log(json);
  }).catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request successfully cancelled');
    } else {
      console.error('Fetch failed!', error);
    }
  });

controller.abort();
