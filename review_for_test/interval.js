let id = setInterval(() => {
  console.log('dot');
}, 1000);


setTimeout(clearInterval.bind(this, id), 5000);
