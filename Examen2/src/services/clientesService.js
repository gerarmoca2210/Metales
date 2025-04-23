const Clientes = require('../models/Clientes');
const mongoose = require('mongoose');

class ClientesService {
  async createClientes(data) {
    const cliente = new Clientes(data);
    console.log(cliente);
    await cliente.save();
    return cliente;
  }

  async getClientes(id) {
    return await Clientes.findById(id);
  }

  async getClientes() {
    return await Clientes.find();
  }

  async updateClientes(id, data) {
    return await Clientes.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteClientes(id) {
    return await Clientes.findByIdAndDelete(id);
  }
}

module.exports = new ClientesService();