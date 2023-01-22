function fetchWithTimeout(url, settings, timeout) {
  if (timeout === undefined) {
    return fetch(url, settings);
  }

  if (!Number.isInteger(timeout)) {
    throw new TypeError('The third argument is not an integer');
  }

  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeout);
  settings.signal = controller.signal;
  return fetch(url, settings);
}

fetchWithTimeout('https://eloux.com/todos/1', {}, 500).then(success => {
  console.log(success);
}).catch(error => console.error('error 42'));
