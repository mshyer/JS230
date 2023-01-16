const thumbCaption = document.querySelectorAll('.thumbcaption');
let captions = [];

for (let idx = 0; idx < thumbCaption.length; idx += 1) {
  captions.push(thumbCaption[idx].textContent.trim());
}

