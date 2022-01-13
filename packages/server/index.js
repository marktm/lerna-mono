const { application } = require('express');
const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('backend');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is listening on port ${port}`);
  }
});