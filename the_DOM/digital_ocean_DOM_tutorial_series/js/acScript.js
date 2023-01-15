const demoID = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demo');
const demoTag = document.getElementsByTagName('article');
const demoQuery = document.querySelector('#demo-query');
const demoQueryAll = document.querySelectorAll('.demo-query-all');

console.log(demoID);
console.log(demoClass);
console.log(demoTag);
console.log(demoQuery);
console.log(demoQueryAll);

demoID.addEventListener('click', () => {
  demoID.style.border = '2px solid green';
});

for (let ele of demoClass) {
  ele.addEventListener('click', () => {
    ele.style.border = '2px solid green';
  });
}

for (let ele of demoTag) {
  ele.addEventListener('click', () => {
    ele.style.border = '2px solid green';
  });
}
 
demoQuery.addEventListener('click', () => {
  demoQuery.style.border = '2px solid green';
});

for (let ele of demoQueryAll) {
  ele.addEventListener('click', () => {
    ele.style.border = '2px solid green';
  });
}
