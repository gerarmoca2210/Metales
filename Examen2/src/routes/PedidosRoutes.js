const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

//router.post('/pedidos', pedidosController.createPedidos);
router.get('/pedidos/todos', pedidosController.getPedidosConProductos);
router.get('/pedidos', pedidosController.getPedidos);
router.post('/pedidos', pedidosController.createPedido);
router.get('/pedidos/:id', pedidosController.getPedido);
router.put('/pedidos/:id', pedidosController.updatePedido);
router.delete('/pedidos/:id', pedidosController.deletePedido);

module.exports = router;