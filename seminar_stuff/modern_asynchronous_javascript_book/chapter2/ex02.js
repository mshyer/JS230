const srcArr = [
  'https://eloux.com/async_js/examples/1.json',
  'https://eloux.com/async_js/examples/2.json',
  'https://eloux.com/async_js/examples/3.json',
];

srcArr[Symbol.asyncIterator] = async function*() {
  for (const url of this) {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error('Unable to retrieve item at URL ' + response.status);
    }
    yield response.json();
  }
}

const iterator = srcArr[Symbol.asyncIterator]();

iterator.next().then(result => {
  console.log(result.value.firstName);
});

iterator.next().then(result => {
  console.log(result.value.firstName);
});

iterator.next().then(result => {
  console.log(result.value.firstName);
});
