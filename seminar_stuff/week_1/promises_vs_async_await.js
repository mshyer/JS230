function fetchExample() {
  const promise = fetch('https://example.com');

  return promise
    .then((result) => result.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.error('Caught: ' + error.message);
    });
}

//fetchExample();


async function fetchAnotherExample() {
  const promise = fetch();

  try {
    let result = await promise;
    let json = await result.json();
    console.log(json);
  } catch (error) {
    console.error('Caught: ' + error.message);
  }
}

fetchAnotherExample();
