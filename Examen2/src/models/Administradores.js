const mongoose = require('mongoose');

const AdministradorSchema = new mongoose.Schema({
  usuario: { type: String},
  password: { type: String}
}, { timestamps: true }, 
{collection: 'administradores'});

module.exports = mongoose.model('Administradores', AdministradorSchema);