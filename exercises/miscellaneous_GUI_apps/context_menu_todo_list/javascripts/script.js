todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

document.addEventListener('DOMContentLoaded', () => {
  const contextMenu = document.querySelector('.context_menu');
  const contextMenuRemoveButton = contextMenu.querySelector('li#remove');
  const confirm = document.querySelector('.confirm_wrapper');
  const confirmYes = confirm.querySelector('.confirm');
  const confirmNo = confirm.querySelector('.cancel');
  let templateScript = Handlebars.compile(document.getElementById('todos_template').innerHTML);
  templateScript({todos: todo_items});
  document.querySelector('#todos_wrapper').insertAdjacentHTML('beforeend', (templateScript({todos: todo_items})));

  document.querySelector('#todos_wrapper').addEventListener('contextmenu', function(event) {
    event.preventDefault();
    if (event.target.tagName === 'LI') {
      contextMenu.style.display = 'block';
      contextMenu.style.left = `${event.clientX}px`;
      contextMenu.style.top = `${event.clientY}px`;
      confirmYes.dataset.id = event.target.dataset.id;
      let aborter = new AbortController();
      let signal = aborter.signal;
      document.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.closest('div.context_menu')) {
          contextMenu.style.display = 'none';
          aborter.abort();
        }
      }, {signal: signal});

    }
  });
  contextMenuRemoveButton.addEventListener('click', (e) => {
    e.preventDefault();
    confirm.style.display = 'block';
    contextMenu.style.display = 'none';
    let aborter = new AbortController();
    let signal = aborter.signal;
    confirmYes.addEventListener('click', (e) => {
      e.preventDefault();
      confirm.style.display = 'none';
      let dataId = confirmYes.dataset.id;
      todo_items = todo_items.filter(todo => todo.id !== Number(dataId));
      document.querySelector('#todos_wrapper').replaceChildren();
      document.querySelector('#todos_wrapper').insertAdjacentHTML('beforeend', (templateScript({todos: todo_items})));
      aborter.abort();
    }, {signal: signal});

    confirmNo.addEventListener('click', (e) => {
      e.preventDefault();
      confirm.style.display = 'none';
      aborter.abort();
    }, {signal: signal});

  });

});

