const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedoresController');

router.post('/proveedores', proveedoresController.createProveedores);
router.get('/proveedores', proveedoresController.getProveedores);
router.put('/proveedores/:id', proveedoresController.updateProveedores);
router.delete('/proveedores/:id', proveedoresController.deleteProveedores);

module.exports = router;