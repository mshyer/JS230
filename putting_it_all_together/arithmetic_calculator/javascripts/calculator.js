// When posting a form, prevent the default, capture the inputs
// Store first number as first, second number as second, then execute the calculation
// Add an event listener for submit
//   update the text value of result (using decimal/float values)

document.addEventListener('DOMContentLoaded', () => {
  const num1 = document.getElementById('first-number');
  const num2 = document.getElementById('second-number');
  const operation = document.querySelector('select');
  const h1 = document.querySelector('h1');

  function calculate(val1, val2, method) {
    switch (method) {
      case '+':
        return val1 + val2;
      case '-':
        return val1 - val2;
      case '*':
        return val1 * val2;
      case '/':
        return (val1 / val2).toFixed(2);
    }
    return 'whoops';
  }

  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let val1 = Number.parseFloat(num1.value, 10);
    let val2 = Number.parseFloat(num2.value, 10);
    let method = operation.value;
    h1.textContent = calculate(val1, val2, method);

  });
});
