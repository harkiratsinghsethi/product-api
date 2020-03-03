const express = require('express');
const controller = require('../services/productService.js');
router = express.Router();

router.route('/getAllProducts').get(controller.getAllProducts);
router.route('/addProduct').post(controller.addProduct);


module.exports = router;
