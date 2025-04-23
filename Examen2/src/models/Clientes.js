const mongoose = require('mongoose');
const clientesSchema = new mongoose.Schema({
    nombre: { type: String },
    telefono: { type: String },
    email: { type: String },
}, { collection: 'clientes' });

module.exports = mongoose.model('clientes', clientesSchema);