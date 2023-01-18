function startCounting() {
  let n = 1;
  setInterval(() => {
    console.log(n);
    n += 1;
  }, 1000);
}

startCounting();
