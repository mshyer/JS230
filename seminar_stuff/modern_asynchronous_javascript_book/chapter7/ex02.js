const res = (async function() {
  const res = await fetch ('https://example.com');
  return res;
}());

console.log(res.then(fulfilled => {
  console.log(fulfilled)}
));
