const express = require("express");
const app = express();
const connectDatabase = require('./config/connectDatabase');
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors")

// Load environment variable
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Import Routes
const products = require('./routes/product');
const orders = require('./routes/order');

// Connect to database
connectDatabase();


app.use(express.json());
app.use(cors());
app.use('/api/v1/', products); 
app.use('/api/v1/', orders);

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server lisetening port : ${process.env.PORT}`)
})