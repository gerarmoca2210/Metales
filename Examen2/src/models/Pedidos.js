const mongoose = require('mongoose');
const pedidosSchema = new mongoose.Schema({
    cliente: {type: String},
    productos: {type: String},
    cantidad: {type: Number},
    estado: { type: String },
}, { collection: 'pedidos' });

module.exports = mongoose.model('Pedidos', pedidosSchema);