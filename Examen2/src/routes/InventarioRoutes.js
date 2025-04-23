const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

router.post('/inventario', inventarioController.createInventario);
router.get('/inventario', inventarioController.getInventario);
router.put('/inventario/:id', inventarioController.updateInventario);
router.delete('/inventario/:id', inventarioController.deleteInventario);

module.exports = router;