const controller = new AbortController();
const signal = controller.signal;

fetch('https://eloux.com/todos/1', {signal})
  .then(response => {
    return response.json();
  }).then(response => {
    console.log(response);
  }).catch(error => {
    console.error('Uh oh spaghettios')
  });
setTimeout(() => controller.abort(), 2000);

signal.addEventListener('abort', () => {
  console.log(signal.aborted);
});
