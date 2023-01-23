const srcArr = [
  'https://eloux.com/async_js/examples/1.json',
  'https://eloux.com/async_js/examples/2.json',
  'https://eloux.com/async_js/examples/3.json',
]

srcArr[Symbol.asyncIterator] = async function*() {
  let i = 0;

  for (const url of this) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Unable to retrieve URL: ' + response.status);
    }

    yield response.json();
  }
};
