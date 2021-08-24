const express = require('express');

const router = express.Router();

const Product = require('../models/Product')

router.get('/:productId', async (req, res) => {
    try {
        const { productId } = req.params
        const product = await Product.findById(productId).select()
        res.json(product)
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Server Error")
    }
});

module.exports = router;