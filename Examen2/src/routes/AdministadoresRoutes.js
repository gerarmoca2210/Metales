const express = require('express');
const router = express.Router();
const administradoresController = require('../controllers/administradoresController');

router.post('/administradores', administradoresController.createAdministradores);
router.get('/administaradores', administradoresController.getAdministradores);
router.get('/administaradores/:id', administradoresController.getAdministradores);
router.put('/administradores/:id', administradoresController.updateAdministradores);
router.delete('/administradores/:id', administradoresController.deleteAdministradores);

module.exports = router;