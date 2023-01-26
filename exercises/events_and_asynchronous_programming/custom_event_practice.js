const catFound = new CustomEvent('animalfound', {
  detail: {
    name: 'cat'
  }
});

const dogFound = new CustomEvent('animalfound', {
  detail: {
    name: 'dog'
  }
});

obj.adEventListener('animalfound', (e) => {
  console.log(e.detail.name);
});

obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);
