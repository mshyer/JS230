let result;
const api = `http://api.openweathermap.org/data/2.5/weather?
q=Tokyo,Japan&APPID=1b1b3e9e909416e5bbe365a0a8505fbb`;

(async () => {
  const response = await fetch(api);
  result = await response.json();
})();

export {result};
