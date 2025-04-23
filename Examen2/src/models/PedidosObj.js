const mongoose = require('mongoose');
const pedidosObjSchema = new mongoose.Schema({
    cliente: {type: mongoose.Types.ObjectId},
    productos: {type: mongoose.Types.ObjectId},
    cantidad: {type: Number},
    estado: { type: String },
}, { collection: 'pedidos' });

module.exports = mongoose.model('PedidosObj', pedidosObjSchema);