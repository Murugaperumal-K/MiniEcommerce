const orderModel = require('../Model/orderModel')
const productModel = require('../Model/productModel')

// Create an order - /api/v1/order
exports.createOrder = async(req, res, next) => {
    //console.log(req.body, 'DATA')get the data from the body
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,item) => (acc+item.product.price * item.qty) ,0).toFixed(2));
    const status = "Pending";
    console.log(amount,"Amount")

    const order = await orderModel.create({cartItems,amount,status})

    cartItems.forEach(async (item)=> {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    })

    


    res.json({
        success: true,
        order
    });
};
 