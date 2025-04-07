const express = require("express");
const { createOrder } = require("../Controller/orderController");
const router = express.Router();

// Route for creating an order
router.route('/order').post(createOrder);

module.exports = router;
