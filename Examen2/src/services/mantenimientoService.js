const Mantenimiento = require('../models/Mantenimiento');
const mongoose = require('mongoose');

class MantenimientoService {
  async createMantenimiento(data) {
    const mantenimiento = new Mantenimiento(data);
    console.log(mantenimiento);
    await mantenimiento.save();
    return mantenimiento;
  }

  async getMantenimiento(id) {
    return await Mantenimiento.findById(id);
  }

  async getMantenimiento() {
    return await Mantenimiento.find();
  }


  async getMantenimientoConMaquinasYEmpleados(){
    return await Mantenimiento.aggregate([
      {
         $lookup: { 
          from: 'maquinas', 
          localField: 'maquina', 
          foreignField: '_id', 
          as: 'InfoMaquina' 
        } 
      },
      { $unwind: "$InfoMaquina" },
      {
        $lookup: { 
          from: 'empleados', 
          localField: 'empleado', 
          foreignField: '_id', 
          as: 'InfoEmpleado'
        }
      },
      { $unwind: "$InfoEmpleado" },
      {
        $project: {
          "mantenimiento_id": 1,
          "fecha": 1,
          "tipo de mantenimiento": 1,
          "InfoEmpleado": 1
        }
      }
    ]);
  }

  async updateMantenimiento(id, data) {
    return await Mantenimiento.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteMantenimiento(id) {
    return await Mantenimiento.findByIdAndDelete(id);
  }
}

module.exports = new MantenimientoService();