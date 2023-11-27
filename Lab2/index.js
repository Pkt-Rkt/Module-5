const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware (if any) goes here

// Import your router
const calculatorRoutes = require('./routes/calculatorRoutes');

// Use your router
app.use('/calculator', calculatorRoutes);

// Other routes and middleware (if any) go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
