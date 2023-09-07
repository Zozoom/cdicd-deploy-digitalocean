const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

// current timestamp in milliseconds
let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/name', (req, res) => {
  res.send(`Works ${year} + "-" + ${month} + "-" + ${date}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
