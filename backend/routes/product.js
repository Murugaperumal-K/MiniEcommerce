const express = require("express");
const { getProducts, getSingleProduct } = require("../Controller/productController");
const router = express.Router();

// Routes for products
router.route('/products').get(getProducts); // Handles GET requests for all products
router.route('/products/:id').get(getSingleProduct); // Handles GET requests for a single product by ID

module.exports = router;