const express = require('express');
const app = express();

app.listen(7123, function() {
  console.log('listening on 7123');

});

app.get('/', (req, res) => {
  res.send('Hello World')
});
