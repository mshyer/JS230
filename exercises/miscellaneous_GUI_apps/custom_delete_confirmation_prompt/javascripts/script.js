todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

document.addEventListener('DOMContentLoaded', () => {
  let templateScript = Handlebars.compile(document.getElementById('todos_template').innerHTML);
  templateScript({todos: todo_items});
  document.body.insertAdjacentHTML('beforeend', (templateScript({todos: todo_items})));

});

