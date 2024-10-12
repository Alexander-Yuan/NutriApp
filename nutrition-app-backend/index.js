const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Simple public route
app.get('/', (req, res) => {
  res.send('Welcome to the Nutrition App Backend!');
});

// Placeholder for protected route (to be secured with Auth0 later)
app.get('/api/protected', (req, res) => {
  res.send('This is a protected route that requires authentication.');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
