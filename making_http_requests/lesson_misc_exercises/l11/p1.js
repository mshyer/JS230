let request = new XMLHttpRequest();
//request.open('GET', 'https://api.github.com/repos/rails/rails');
request.open('GET', "hts://api.github.com/repos/rails/rails");
request.responseType = 'json';

request.addEventListener('load', () => {
  if (request.status !== 200) {
    console.log(request.status);
    console.log('There was a problem');
  } else {
    console.log(request.response);
    console.log(request.status);
    console.log(request.response.open_issues);
  }
});

request.addEventListener('error', event => {
  console.log('bad');
});
request.send();
