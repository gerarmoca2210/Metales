const Administradores = require('../models/Administradores');
const mongoose = require('mongoose');

class AdministradoresService {
  async createAdministradores(data) {
    const administrador = new Administradores(data);
    console.log(administrador);
    await administrador.save();
    return administrador;
  }

  async getAdministradores(id) {
    return await Administradores.findById(id);
  }

  async getAdministradores() {
    return await Administradores.find();
  }

  async updateAdministradores(id, data) {
    return await Administradores.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteAdminstradores(id) {
    return await Administradores.findByIdAndDelete(id);
  }
}

module.exports = new AdministradoresService();