document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', function(eve) {
    eve.preventDefault();
    const itemName = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value || 1;
    const li = document.createElement('li');
    const p = document.createElement('p');
    li.appendChild(p);
    p.textContent = `${quantity} ${itemName}`;
    document.getElementById('grocery-list').appendChild(li);
    document.querySelector('form').reset();

  });
});
