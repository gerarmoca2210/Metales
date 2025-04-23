const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

//router.post('/pedidos', pedidosController.createItem);
router.get('/pedidos/todos', pedidosController.getPedidosConProductos);
router.get('/pedidos', pedidosController.getPedidos);

module.exports = router;