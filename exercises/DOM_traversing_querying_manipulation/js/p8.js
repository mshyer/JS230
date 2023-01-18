// THINKING: 
//   -create an element from the tag name
//   -Append the item at first index to the children of previous node
//   -recursively, do the same for all children if children
//
// INPUT: nested array
// OUTPUT: side effect, create DOM nodes
// Data Structure: recursion
// Algorithm:
//   create the node from index 0
//   add this node to the parent's children
//   then recursively do the same for the children

function arrayToNodes(nodes, parent = document.querySelector('html')) {
  let nodeTag = nodes[0];
  let newNode = document.createElement(nodeTag);
  parent.appendChild(newNode);
  for (let idx = 0; idx < nodes[1].length; idx += 1) {
    arrayToNodes(nodes[1][idx], newNode);
  }
}
//const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
const nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

