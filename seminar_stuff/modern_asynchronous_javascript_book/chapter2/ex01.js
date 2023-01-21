const collection = {
  a: 10,
  b: 20,
  c: 30,
  [Symbol.iterator]: function*() {
    for (let ele in this) {
      yield ele;
    }
  }
};

const iterator = collection[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
