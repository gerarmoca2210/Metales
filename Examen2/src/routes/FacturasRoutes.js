const express = require('express');
const router = express.Router();
const facturasController = require('../controllers/facturasController');

router.post('/facturas', facturasController.createFacturas);
router.get('/facturas', facturasController.getFacturas);
router.put('/facturas/:id', facturasController.updateFacturas);
router.delete('/facturas/:id', facturasController.deleteFacturas);

module.exports = router;