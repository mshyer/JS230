const container = document.querySelector('.container');
const controller = new AbortController();
const signal = controller.signal;

function sayHello() {
  container.textContent = 'Hello';
}

function sayBye() {
  container.textContent = 'Bye!';
}

function depress() {
  container.style.backgroundColor = 'aqua';
}

function release() {
  container.style.backgroundColor = 'transparent';
}

container.addEventListener('mouseenter', sayHello, {signal});
container.addEventListener('mouseout', sayBye, {signal});
container.addEventListener('mousedown', depress, {signal});
container.addEventListener('mouseup', release, {signal});

let bambam = document.querySelector('#bambam');
bambam.addEventListener('click', () => {
  controller.abort();
});
//container.removeEventListener('mouse

//container.removeEventListener('mouse
//

