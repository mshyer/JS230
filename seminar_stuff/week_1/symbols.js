let hello = Symbol('hello');

let obj = {
  hello: 'world',
};
obj.hello = 'string property!';

obj[hello] = 'new world';

console.log(obj);
