const express = require('express');
const router = express.Router();
const maquinasController = require('../controllers/maquinasController');

router.post('/maquinas', maquinasController.createMaquinas);
router.get('/maquinas', maquinasController.getMaquinas);
router.put('/maquinas/:id', maquinasController.updateMaquinas);
router.delete('/maquinas/:id', maquinasController.deleteMaquinas);

module.exports = router;