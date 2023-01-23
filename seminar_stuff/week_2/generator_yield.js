function* generatorFunc() {
  let arr = [1, 2, 3];

  for (let num of arr) {
    yield num + 100;
  }
}

let iterator = generatorFunc();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

