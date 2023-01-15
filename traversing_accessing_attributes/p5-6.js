//to use in script tag with PolarBear HTML page
const walk = function(node, callback) {
  callback(node);
  for (let idx = 0; idx < node.children.length; idx += 1) {
    walk(node.children[idx], callback);
  }
};
// p6

walk(document, node => {
  if (node.tagName === 'A') {
    node.style.color = 'red';
  }
});


//p5
let imgCount = 0;
walk(document, node => {
  if (node.tagName === 'IMG') {
    imgCount += 1;
  }
});

console.log(imgCount);

let pngCount = 0;

walk(document, node => {
  if (node.tagName === 'IMG') {
    if (node.src.endsWith('png')) {
      pngCount += 1;
    }
  }
});

console.log(pngCount);





