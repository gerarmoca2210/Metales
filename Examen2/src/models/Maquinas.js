const mongoose = require('mongoose');

const maquinasSchema = new mongoose.Schema({
    nombre: { type: String},
    modelo: { type: String},
    año: { type: Number},
    estado: { type: String}
}, { collection: 'maquinas' });

module.exports = mongoose.model('Maquinas', maquinasSchema);