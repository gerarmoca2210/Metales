const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
  nombre: { type: String},
  puesto: { type: String},
  salario: { type: Number},
  fecha_ingreso: { type: Date, default: Date.now }
}, {collection: 'empleados'});

module.exports = mongoose.model('Empleados', EmpleadoSchema);