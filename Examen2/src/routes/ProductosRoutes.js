const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.post('/productos', productosController.createProductos);
router.get('/productos', productosController.getProductos);
router.put('/productos/:id', productosController.updateProductos);
router.delete('/productos/:id', productosController.deleteProductos);

module.exports = router;