const express = require('express');
const router = express.Router();
const calificacionesController = require('../controllers/calificacionesController');

router.post('/calificaciones', calificacionesController.createItem);
router.get('/calificaciones/:id', calificacionesController.getItem);
router.get('/calificaciones/estado/:estado', calificacionesController.getEstado);
router.get('/calificaciones/promedio/:cuatrimestre', calificacionesController.getPromedioCuatrimestre);
router.get('/calificaciones/civica/:min/:max', calificacionesController.getCivicaRango);
router.get('/calificaciones/documentos/:cuatrimestre/:nombreCompleto', calificacionesController.getDocuments);
router.get('/calificaciones/notas/:cuatrimestre/:nombreCompleto', calificacionesController.getNotaMasAlta);
router.put('/calificaciones/:id', calificacionesController.updateItem);
router.delete('/calificaciones/:id', calificacionesController.deleteItem);

module.exports = router;