const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
    productos: { type: String },
    cantidad: { type: Number },
    ubicacion: { type: String }
}, { collection: 'inventario' });

module.exports = mongoose.model('Inventario', inventarioSchema);