const mongoose = require('mongoose');
const productosSchema = new mongoose.Schema({
    nombre: { type: String },
    material: { type: String },
    precio: { type: Number },
    stock: { type: Number },
    proveedores: { type: Number },
}, { collection: 'productos' });

module.exports = mongoose.model('Productos', productosSchema);