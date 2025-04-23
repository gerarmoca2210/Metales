const Materiales = require('../models/Materiales');
const mongoose = require('mongoose');

class MaterialesService {
  async createMateriales(data) {
    const material = new Materiales(data);
    console.log(material);
    await material.save();
    return material;
  }

  async getMateriales(id) {
    return await Materiales.findById(id);
  }

  async getMateriales() {
    return await Materiales.find();
  }

  async updateMateriales(id, data) {
    return await Materiales.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteMateriales(id) {
    return await Materiales.findByIdAndDelete(id);
  }
}

module.exports = new MaterialesService();