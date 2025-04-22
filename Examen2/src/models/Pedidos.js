const mongoose = require('mongoose');
const pedidosSchema = new mongoose.Schema ({
    cliente_id: { type: Number },
    producto_id: { type: Number },
    cantidad: {type: Number},
    estado: { type: String}, 
}, {collection: 'Pedidos'});

module.exports = mongoose.model('Pedidos', pedidosSchema);