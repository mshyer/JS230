function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function test(input) {
  const a = after1s(2);
  const b = after1s(3);
  return input * await a * await b;
}

let toTest = async function() {
  await test(3).then((value) => {
    //console.log(value);
    return null;
  });
};

async function timeit(func) {
  let before = Date.now();
  await func();
  let after = Date.now();
  console.log(after - before);
}

timeit(toTest);


// test calls after1s, queues 1s timeout
// test calls after1s, queues 1s timeout
// implicitly awaits a and b
// After about 1s, the test function returns 3 * 2 * 3
// Logs 18 to console
