const mongoose = require('mongoose');
const facturasSchema = new mongoose.Schema({
    pedido: {type: String},
    total: { type: Number},
    fecha: { type: Date},
    pagado: { type: Boolean},
}, { collection: 'facturas' });

module.exports = mongoose.model('Facturas', facturasSchema);
