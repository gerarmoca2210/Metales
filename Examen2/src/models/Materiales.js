const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
  nombre: { type: String},
  tipo: { type: String},
  cantidad: { type: Number},
  fecha_ingreso: { type: Date, default: Date.now }
}, {collection: 'materiales'});

module.exports = mongoose.model('Materiales', MaterialSchema);