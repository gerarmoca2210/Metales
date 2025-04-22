const mongoose = require('mongoose');
const pedidosSchema = new mongoose.Schema ({
    nombre: { type: String },
    producto_id: { type: Number },
    cantidad: {type: Number},
    estado: { type: String}, 
}, {collection: 'Productos'});

module.exports = mongoose.model('Pedidos', pedidosSchema);