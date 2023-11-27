const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Operations related to products
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successful response with a list of products
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 title: Product 1
 *                 description: Description of Product 1
 *                 price: 19.99
 *                 image: https://example.com/product1.jpg
 *                 category: Electronics
 *               - id: 2
 *                 title: Product 2
 *                 description: Description of Product 2
 *                 price: 29.99
 *                 image: https://example.com/product2.jpg
 *                 category: Clothing
 */
router.get('/products', async (req, res) => {
  try {
    const products = await productController.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

/**
 * @swagger
 * /api/products/{category}:
 *   get:
 *     summary: Get products by category
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         description: The category of products to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with products of the specified category
 *         content:
 *           application/json:
 *             example:
 *               - id: 3
 *                 title: Product 3
 *                 description: Description of Product 3
 *                 price: 39.99
 *                 image: https://example.com/product3.jpg
 *                 category: Electronics
 */
router.get('/products/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const products = await productController.getProductsByCategory(category);
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;