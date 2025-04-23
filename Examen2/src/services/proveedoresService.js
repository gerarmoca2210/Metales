const Proveedores = require('../models/Proveedores');
const mongoose = require('mongoose');

class ProveedoresService {
  async createProveedores(data) {
    const proveedor = new Proveedores(data);
    console.log(proveedor);
    await proveedor.save();
    return proveedor;
  }

  async getProveedores(id) {
    return await Proveedores.findById(id);
  }

  async getProveedores() {
    return await Proveedores.find();
  }

  async updateProveedores(id, data) {
    return await Proveedores.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProveedores(id) {
    return await Proveedores.findByIdAndDelete(id);
  }
}

module.exports = new ProveedoresService();