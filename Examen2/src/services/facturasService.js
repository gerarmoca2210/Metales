const Facturas = require('../models/Facturas');
const mongoose = require('mongoose');

class FacturasService {
  async createFacturas(data) {
    const factura = new Facturas(data);
    console.log(factura);
    await factura.save();
    return factura;
  }

  async getFacturas(id) {
    return await Facturas.findById(id);
  }

  async getFacturas() {
    return await Facturas.find();
  }

  async updateFacturas(id, data) {
    return await Facturas.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteFacturas(id) {
    return await Facturas.findByIdAndDelete(id);
  }
}

module.exports = new FacturasService();