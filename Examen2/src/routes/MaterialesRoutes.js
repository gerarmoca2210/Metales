const express = require('express');
const router = express.Router();
const materialesController = require('../controllers/materialesController');

router.post('/materiales', materialesController.createMateriales);
router.get('/materiales', materialesController.getMateriales);
router.put('/materiales/:id', materialesController.updateMateriales);
router.delete('/materiales/:id', materialesController.deleteMateriales);

module.exports = router;