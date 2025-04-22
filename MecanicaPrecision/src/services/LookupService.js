const mongoose = require('mongoose');

class LookupService {
  // Consulta desde Pedidos obtiene la info de Productos
  async getPedidosConProductos() {
    return await mongoose.connection.collection('pedidos').aggregate([
      {
        $lookup: {
          from: 'productos',
          localField: 'productos',
          foreignField: '_id',
          as: 'ProductosConsulta'
        }
      }
    ]).toArray();
  }

  // Consulta desde Productos obtiene la info de Proveedores
  async getProductosConProveedores() {
    return await mongoose.connection.collection('productos').aggregate([
      {
        $lookup: {
          from: 'proveedores',
          localField: 'proveedores',
          foreignField: '_id',
          as: 'info_proveedor'
        }
      }
    ]).toArray();
  }

  // Consulta desde Mantenimiento obtiene info de Maquinas y Empleados
  async getMantenimientoConMaquinasYEmpleados() {
    return await mongoose.connection.collection('mantenimiento').aggregate([
      {
        $lookup: {
          from: 'maquinas',
          localField: 'maquinas',
          foreignField: '_id',
          as: 'info_maquina'
        }
      },
      {
        $lookup: {
          from: 'empleados',
          localField: 'empleado',
          foreignField: '_id',
          as: 'info_empleado'
        }
      }
    ]).toArray();
  }

  // Creación de la vista materializada desde Pedidos
  async createVistaMaterializadaPedidos() {
    await mongoose.connection.collection('pedidos').aggregate([
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
}

module.exports = new LookupService();