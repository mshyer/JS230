// Given an ID, get a DOM element and return an array
// INPUT String
// OUTPUT: array
//   -First subarray contains the element and its siblings
//   -Second contains parent and its siblings
//   -All the way to BODY element
////  Thoughts: use recursion until parent element is html (that is the top level element)
//   //-return recursive(parent)
//   Let's not use recursion.
//   Use a while loop while the element is NOT the html element
//     add the element and then all of its siblings to the nested array
//     change the element to the parent
//     rinse and repeat
//   return the nested array

function getBros(element) {
  let meAndBros = [element];
  console.log(element);
  let siblings = element.parentElement.children;
  for (let ele of siblings) {
    if (ele !== element) {
      meAndBros.push(ele);
    }
  }
  return meAndBros;
}

function domTreeTracer(id) {
  let domTree = [];
  let target = document.getElementById(id);
  const html = document.querySelector('html');
  while (target.parentElement !== html) {
    let meAndMyBros = getBros(target);
    domTree.push(meAndMyBros);
    target = target.parentNode;
  }
  return domTree;
}
