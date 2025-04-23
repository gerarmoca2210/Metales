const mongoose = require('mongoose');

const mantenimientoSchema = new mongoose.Schema({
    maquinas: { type: String},
    fecha: { type: Date},
    tipo_de_mantenimiento: { type: String},
    empleado: { type: String}
}, { collection: 'mantenimiento' });

module.exports = mongoose.model('Mantenimiento', mantenimientoSchema);