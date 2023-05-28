const express = require('express');
const app = express();

app.post('/user', (req, res) => {
  let bodyData = '';

  req.on('data', (chunk) => {
    bodyData += chunk;
  });

  req.on('end', () => {
    const userData = JSON.parse(bodyData);
    console.log(userData); // Output: { name: 'John', email: 'john@example.com' }

    // Handle the data

    res.send('User created successfully');
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
