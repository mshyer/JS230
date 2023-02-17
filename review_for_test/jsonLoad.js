let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';
request.send();

request.addEventListener('load', (e) => {
  let data = JSON.parse(request.response);
});

request.addEventListener('error', (e) => {
  console.log('the request could not be completed');
});

