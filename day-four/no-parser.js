const express = require('express');
const app = express();

app.post('/user', (req, res) => {
  const userData = req.body; // Accessing the request body without parsing
  console.log(req)
  console.log(userData); // Output: undefined

  // Handle the data (manually parsing if needed)

  res.send('User created successfully');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
