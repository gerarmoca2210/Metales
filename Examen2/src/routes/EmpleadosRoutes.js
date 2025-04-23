const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');

router.post('/empleados', empleadosController.createEmpleados);
router.get('/empleados', empleadosController.getEmpleados);
router.put('/empleados/:id', empleadosController.updateEmpleados);
router.delete('/empleados/:id', empleadosController.deleteEmpleados);

module.exports = router;