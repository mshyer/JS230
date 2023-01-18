//INPUT: string ID, string ID
//OUTPUT: array of strings
//NOTES:
//  -inclusive
//  -only element nodes
//  -only elements with `body` as ancestor are sliceable
//  -return undefined if ID is not in the DOM
//  -if there is no path between start and end index, return undefined.
//
//  Algorithm:
//    -CHECK IF ID in the DOM
//      -if document.getElementById is falsy, return undefined
//    -CHECK IF THE START IS ANCESTOR OF BODY
//      -get the ancestor until it equals body or html
//      -if it equals html, return undefined
//    -CHECK IF THE TWO ARE RELATED
//      -using while loop, get parent element until parent is start position or html
//      -If body, return undefined
//    
//    Create an empty array
//      -while the element in question is not the start's parent
//        -add the name of the element to the array
//        -set the element to the element's parent element

const html = document.querySelector('html');
function idInDOM(id) {
  return !!document.getElementById(id);
}

function isBodyAncestor(element) {
  while (element.parentElement !== html) {
    element = element.parentElement;
    if (element === document.body) {
      return true;
    }
  }
  return false;
}

function elementsDOMRelatives(ele1, ele2) {
  let current = ele1;
  while (current !== html) {
    current = current.parentElement;
    if (current === ele2) {
      return true;
    }
  }
  return false;

}

function sliceTree(id1, id2) {
  let start = document.getElementById(id2);
  let finish = document.getElementById(id1);
  if (!(idInDOM(id1) && idInDOM(id2)) ||
      !isBodyAncestor(start) ||
      !elementsDOMRelatives(start, finish)) {
    return undefined;
  }
  let current = start;
  let branch = [];
  while (current !== finish.parentElement) {
    branch.push(current.tagName);
    current = current.parentElement;
  }
  branch.reverse();
  return branch;

}

