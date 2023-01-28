let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
let data = {
  name: 'Haruki Book',
  sku: 'HRB',
  price: 10,
};

let json = JSON.stringify(data);

request.send(json);

