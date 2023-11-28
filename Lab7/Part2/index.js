const express = require('express');
const productRoutes = require('./routes/productRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 5000;

// Swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Fake Store API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/productRoutes.js'],
};
const specs = swaggerJsdoc(options);

// Define routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', productRoutes);

// Serve static files
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
