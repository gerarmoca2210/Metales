const Productos = require('../models/Productos');
const mongoose = require('mongoose');

class ProductosService {
  async createProductos(data) {
    const proveedor = new Productos(data);
    console.log(proveedor);
    await proveedor.save();
    return proveedor;
  }

  async getProductos(id) {
    return await Productos.findById(id);
  }

  async getProductos() {
    return await Productos.find();
  }

  async getProductosConProveedores() {
    return await Productos.aggregate([
      {
        $lookup: {
          from: 'proveedores', 
          localField: 'proveedor', 
          foreignField: '_id', 
          as: 'InfoProveedor'
        }
      }
    ]);
  }
  
  async updateProductos(id, data) {
    return await Productos.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProductos(id) {
    return await Productos.findByIdAndDelete(id);
  }
}

module.exports = new ProductosService();