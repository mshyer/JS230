let data = {
  fruit: ['apples', 'pears', 'oranges'],
  vegetables: ['carrots', 'celery', 'brocolli'],
  client: 'Maria Sanchez',
};

let bookData = {
  title: 'Do Androids Dream of Electric Sheep?',
  author: 'Philip K Dick',
};

let urlQueryString = ['?'];

for (let key in bookData) {
  urlQueryString.push(encodeURIComponent(`${key}=${bookData[key]}`));
}

let request = new XMLHttpRequest();
request.open('POST', `https://wikipedia.org/${urlQueryString.join('&')}`);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
request.send();

