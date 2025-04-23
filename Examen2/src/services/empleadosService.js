const Empleados = require('../models/Empleados');
const mongoose = require('mongoose');

class EmpleadosService {
  async createEmpleados(data) {
    const empleado = new Empleados(data);
    console.log(empleado);
    await empleado.save();
    return empleado;
  }

  async getEmpleados(id) {
    return await Empleados.findById(id);
  }

  async getEmpleados() {
    return await Empleados.find();
  }

  async updateEmpleados(id, data) {
    return await Empleados.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteEmpleados(id) {
    return await Empleados.findByIdAndDelete(id);
  }
}

module.exports = new EmpleadosService();