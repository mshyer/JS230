const testPromise = () => Promise.resolve("1");

function test1() {
  testPromise().then((result) => console.log(result));
  console.log("2");
}

function test2() {
  console.log("3");
}

test1();
test2();

//logs: 2, the async then result is placed on the event stack
//Then logs 3
//then logs 1
