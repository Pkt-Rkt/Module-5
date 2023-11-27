const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);

// Serve static HTML files from the 'public' directory
app.use(express.static('public'));

// Import your router
const calculatorRoutes = require('./routes/calculatorRoutes');

// Use your router
app.use('/calculator', calculatorRoutes);

// Other routes and middleware (if any) go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//http://localhost:3000