let counterId;

function startCounting() {
  let n = 1;
  counterId = setInterval(() => {
    console.log(n);
    n += 1;
  }, 1000);
}

function stopCounting() {
  clearInterval(counterId);
}

setTimeout(stopCounting, 5101);
startCounting();
