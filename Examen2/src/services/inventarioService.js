const Inventario = require('../models/Inventario');
const mongoose = require('mongoose');

class InventarioService {
  async createInventario(data) {
    const inventario = new Inventario(data);
    console.log(inventario);
    await inventario.save();
    return inventario;
  }

  async getInventario(id) {
    return await Inventario.findById(id);
  }

  async getInventario() {
    return await Inventario.find();
  }

  async updateInventario(id, data) {
    return await Inventario.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteInventario(id) {
    return await Inventario.findByIdAndDelete(id);
  }
}

module.exports = new InventarioService();