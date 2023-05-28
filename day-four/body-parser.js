const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data

// Route with built-in body parser
app.post('/user', (req, res) => {
  const userData = req.body; // Accessing the parsed request body
  console.log(userData); // Output: { name: 'John', email: 'john@example.com' }

  // Handle the data

  res.send('User created successfully');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
