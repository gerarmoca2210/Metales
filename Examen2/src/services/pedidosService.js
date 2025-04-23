const Pedidos = require('../models/Pedidos');
const PedidosObj = require('../models/PedidosObj')
const Maquinas = require('../models/Maquinas');
const mongoose = require('mongoose');

class PedidosService {
  async createPedidos(data) {
    const pedido = new PedidosObj(data);
    await pedido.save();
    return pedido;
  }

  async getPedido(id) {
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
          "NombreCliente.nombre":1,
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

  async updatePedidos(id, data) {
    console.log(id);
    const pedido = new PedidosObj(data);
    console.log(pedido);
    return await Pedidos.findByIdAndUpdate(id, pedido, { new: true });
  }

  async deletePedidos(id) {
    return await Pedidos.findByIdAndDelete(id);
  }
}

module.exports = new PedidosService();