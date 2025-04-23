const mongoose = require('mongoose');

const proveedoresSchema = new mongoose.Schema({
    nombre: { type: String},
    telefono: { type: String},
    email: { type: String},
    direccion: {
        provincia: { type: String},
        canton: { type: String },
        distrito: { type: String}
    }
}, { collection: 'proveedores' });

module.exports = mongoose.model('Proveedores', proveedoresSchema);