const Maquinas = require('../models/Maquinas');
const mongoose = require('mongoose');

class MaquinasService {
  async createMaquinas(data) {
    const maquina = new Maquinas(data);
    console.log(maquina);
    await maquina.save();
    return maquina;
  }

  async getMaquinas(id) {
    return await Maquinas.findById(id);
  }

  async getMaquinas() {
    return await Maquinas.find();
  }

  async updateMaquinas(id, data) {
    return await Maquinas.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteMaquinas(id) {
    return await Maquinas.findByIdAndDelete(id);
  }
}

module.exports = new MaquinasService();