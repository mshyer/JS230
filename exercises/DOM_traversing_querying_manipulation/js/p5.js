// Input: a number representing the generation
//   -note: generation is counted up from the first after body. Gen 1 is not body, but the child nodes
// Output: side effect: colors the screen
//   -Change the class to '.generation-color' to apply styling
// Algorithm:
//   1. get the child elements at gen n
//     walk the tree
//     The callback function asks question: is this element gen n?
//       -if the element is genN, set to correct class
//
//   2. give them class .generation-color
//
let html = document.querySelector('html');

function walk(node, callback) {
  callback(node);
  for (let idx = 0; idx < node.children.length; idx += 1) {
    walk(node.children[idx], callback);
  }
}

function getGeneration(ele) {
  let gen = 0;
  let current = ele;
  while (current !== document.body) {
    current = current.parentElement;
    gen += 1;
  }
  return gen;
}

function colorGenCallback(n, element) {
  let gen = getGeneration(element);
  if (gen > n) {
    return false;
  } else if (gen === n) {
    element.classList.add('generation-color');
  }
}

function colorGeneration(n) {
  let pfaCallback = colorGenCallback.bind(this, n); 
  walk(document.body, pfaCallback);
}
