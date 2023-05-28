// imported express
const express = require('express');

// created instance of express app
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World from express!');
});

const port = 3000;

// listen at port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});