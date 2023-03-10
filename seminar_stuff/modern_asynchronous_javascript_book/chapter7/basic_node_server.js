const express = require('express');
express.static.mime.define({'application/javascript': ['js']});
console.log(express.static.mime);
var path = require('path');

const app = express();
app.use( '/src', express.static( __dirname + '/src' ));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(8080, () => console.log('Listening on port 8080!'));
