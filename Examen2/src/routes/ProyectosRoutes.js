const express = require('express');
const router = express.Router();
const proyectosController = require('../controllers/proyectosController');

router.post('/proyectos', proyectosController.createProyectos);
router.get('/proyectos', proyectosController.getProyectos);
router.put('/proyectos/:id', proyectosController.updateProyectos);
router.delete('/proyectos/:id', proyectosController.deleteProyectos);

module.exports = router;