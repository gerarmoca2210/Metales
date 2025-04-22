const mongoose = require('mongoose');
const calificacionesSchema = new mongoose.Schema ({
    NombreEstudiante: { nombre1: String, nombre2: String, apellido1: String, apellido2: String},
    notaMatematica: { type: Number },
    notaCiencias: { type: Number },
    cuatrimestre: {type: Number},
    notaLiteratura: { type: Number },
    notaCivica: { type: Number },
    estado: { type: String}, 
}, {collection: 'Calificaciones'});

module.exports = mongoose.model('Calificaciones', calificacionesSchema);