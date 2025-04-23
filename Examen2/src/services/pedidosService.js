const Pedidos = require('../models/Pedidos');
const Maquinas = require('../models/Maquinas');
const mongoose = require('mongoose');

class CalificacionesService {
  async createItem(data) {
    const item = new Pedidos(data);
    console.log(item);
    await item.save();
    return item;
  }

  async getItem(id) {
    return await Pedidos.findById(id);
  }

  async getPedidos() {
    return await Pedidos.find();
  }

  // Consulta desde Pedidos obtiene la info de Productos
  async getPedidosConProductos() {
    return await Pedidos.aggregate([
      {
        $lookup: {
          from: 'productos',
          localField: 'productos',
          foreignField: '_id',
          as: 'ProductosConsulta'
        }
      },
      {
        $lookup: {
          from: 'clientes',
          localField: 'cliente',
          foreignField: '_id',
          as: 'NombreCliente'
        },
      },
      { $unwind: "$NombreCliente" },
      {
        $project: {
          "cantidad": 1,
          "productos":1,
          "cliente":1,
          "estado": 1,
          "ProductosConsulta.nombre": 1,
          "NombreCliente.nombre":1
        }
      }

    ]);
  }

  // Creación de la vista materializada desde Pedidos
  async createVistaMaterializadaPedidos() {
    await Pedidos.aggregate([
      {
        $lookup: {
          from: 'clientes',
          localField: 'cliente',
          foreignField: '_id',
          as: 'ClientesConsulta'
        }
      },
      {
        $out: 'VistaMaterializadaPedidos'
      }
    ]);
    return 'Vista materializada creada con éxito';
  }

  // Consulta de la vista materializada
  async getVistaMaterializadaPedidos() {
    return await mongoose.connection.collection('VistaMaterializadaPedidos').find({}).toArray();
  }

  async updateItem(id, data) {
    return await Pedidos.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteItem(id) {
    return await Pedidos.findByIdAndDelete(id);
  }
}

module.exports = new CalificacionesService();