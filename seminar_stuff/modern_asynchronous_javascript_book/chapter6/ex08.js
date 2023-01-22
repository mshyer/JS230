document.addEventListener('DOMContentLoaded', () => {
const loadBtn = document.querySelector('.loadBtn');
const abortBtn = document.querySelector('.abortBtn');
const image = document.querySelector('.image');
const result = document.querySelector('.result');

const controller = new AbortController();

console.log(abortBtn);
abortBtn.addEventListener('click', () => controller.abort());

loadBtn.addEventListener('click', async () => {
  loadBtn.disabled = true;
  abortBtn.disabled = false;

  result.textContent = 'Loading...';

  try {
    const response = await fetch(
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Kayakistas_en_Glaciar_Grey.jpg',
      {signal: controller.signal});
    const blob = await response.blob();
    console.log(response);
    console.log(response.constructor);
    console.log('This is the blob');
    console.log(blob);
    window.blobby = blob;
    console.log(blob instanceof Blob);
    image.src = URL.createObjectURL(blob);

    result.textContent = '';
  }
  catch(err) {
    if (err.name === 'AbortError') {
      result.textContent = 'Request successfully canceled';
    } else {
      result.textContent = 'An error occurred!';
      console.error(err);
    }
  }

  loadBtn.disabled = false;
  abortBtn.disabled = true;
});
});


