const express = require('express');
const router = express.Router();
const calificacionesController = require('../controllers/pedidosController');
const pedidosController = require('../controllers/pedidosController');

router.post('/pedidos', calificacionesController.createItem);
router.get('/calificaciones/:id', calificacionesController.getItem);
router.get('/calificaciones/estado/:estado', calificacionesController.getEstado);
router.get('/calificaciones/promedio/:cuatrimestre', calificacionesController.getPromedioCuatrimestre);
router.get('/calificaciones/civica/:min/:max', calificacionesController.getCivicaRango);
router.get('/pedidos/todos', pedidosController.getPedidosConProductos);
router.get('/calificaciones/notas/:cuatrimestre/:nombreCompleto', calificacionesController.getNotaMasAlta);
router.put('/calificaciones/:id', calificacionesController.updateItem);
router.delete('/calificaciones/:id', calificacionesController.deleteItem);

module.exports = router;