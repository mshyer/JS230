const test = Promise.reject("A");

(async () => {
  try {
    console.log(await test);
  } catch //(error) {
    //console.log(error);
    console.log("E");
  } finally {
    console.log("B");
  }
})();

// I think the awaited error will be caught and not logged
// THen catch will log E (not A)
// Finally log B
