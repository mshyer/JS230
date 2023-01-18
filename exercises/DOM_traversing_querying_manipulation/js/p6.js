//  Inference: swap only works with sibling elements
//  Input: two id strings
//  Output: side effect, swap positions of 2 siblings in the DOM
//  TO SWAP:
//    -Create an array from the children
//    get the indices of the two elements
//    Pos 1 = ele2 pos2 = ele1 in the array
//    delete the node's children
//    replace the children in order by shifting from the array

function nodeSwap(id1, id2) {
  let ele1 = document.getElementById(id1);
  let ele2 = document.getElementById(id2);
  let parent = ele1.parentElement;
  if (!ele1 || !ele2 || ele1.parentElement !== ele2.parentElement) {
    return undefined;
  }
  let children = Array.from(parent.children);
  let idx1 = children.indexOf(ele1);
  let idx2 = children.indexOf(ele2);
  children[idx1] = ele2;
  children[idx2] = ele1;
  parent.textContent = '';
  while (children.length > 0) {
    console.log(children);
    parent.appendChild(children.shift());
  }
}
