// Input: none (html document)
// Output: nested array with tag name at first position and array of children in second
// Data Structure: recursion (walking the DOM)
// Problem:
//   - The stop condition should be if no children
//   - Else recursive nodesToArr[idx]
// [node, [children]
//
//if no children, append [], 
//  else, append nodesToArr
//
//callback
//
//step

function nodesToArr(node = document.body) {
  let result = [];
  result.push(node.tagName, []);
  for (let idx = 0; idx < node.children.length; idx += 1) {
    result[1].push(nodesToArr(node.children[idx]));
  }
  return result;
}




