// app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware setup
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/admin', userRoutes);


// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
