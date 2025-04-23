const mongoose = require('mongoose');

const proyectosSchema = new mongoose.Schema({
    nombre: { type: String},
    fecha_inicio: { type: Date},
    fecha_fin: { type: Date},
    estado: { type: String}
}, { collection: 'proyectos' });

module.exports = mongoose.model('Proyectos', proyectosSchema);