const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/name', (req, res) => {
  res.send('Hello World! - Changed');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
