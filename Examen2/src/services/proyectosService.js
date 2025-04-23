const Proyectos = require('../models/Proyectos');
const mongoose = require('mongoose');

class ProyectosService {
  async createProyectos(data) {
    const proyecto = new Proyectos(data);
    console.log(proyecto);
    await proyecto.save();
    return proyecto;
  }

  async getProyectos(id) {
    return await Proyectos.findById(id);
  }

  async getProyectos() {
    return await Proyectos.find();
  }

  async updateProyectos(id, data) {
    return await Proyectos.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProyectos(id) {
    return await Proyectos.findByIdAndDelete(id);
  }
}

module.exports = new ProyectosService();