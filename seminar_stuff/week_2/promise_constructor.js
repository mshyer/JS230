function retrieveUrl() {
  return new Promise(function(resolution, rejection) {
    let url = fetch('https://www.wikipedia.org');

    let urlRetrieved = true;
    if (urlRetrieved) {
      resolution('a fake url');
    } else {
      rejection('Failed to retrieve URL');
    }
  });
}

let promise = retrieveUrl();
console.log(promise);

promise.then(function onFulfilled(resolvedValue) {
  console.log(`Success: ${resolvedValue}`);
}, function onRejected(rejectionReason) {
  console.log(`Error: ${rejectionReason}`);
});
