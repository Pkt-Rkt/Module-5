const axios = require('axios');

/**
 * Get a list of products from the external API.
 * @returns {Promise<Array>} A Promise that resolves to an array of products.
 */
const getAllProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw new Error('Internal Server Error');
  }
};

/**
 * Get products by category from the external API.
 * @param {string} category - The category of products to retrieve.
 * @returns {Promise<Array>} A Promise that resolves to an array of products in the specified category.
 */
const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error.message);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  getAllProducts,
  getProductsByCategory,
};
