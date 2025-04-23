const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.post('/clientes', clientesController.createClientes);
router.get('/clientes', clientesController.getClientes);
router.put('/clientes/:id', clientesController.updateClientes);
router.delete('/clientes/:id', clientesController.deleteClientes);

module.exports = router;