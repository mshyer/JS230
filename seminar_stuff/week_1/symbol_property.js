let a = [1, 2, 3];
a.someProp = 'hello';

let key = 'someProp';

console.log(a[key]);

let k = Symbol.iterator;
console.log(typeof k);
console.log(a[k]);
