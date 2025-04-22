const Calificaciones = require('../models/calificaciones');

class CalificacionesService {
  async createItem(data) {
    const item = new Calificaciones(data);
    console.log(item);
    await item.save();
    return item;
  }

  async getItem(id) {
    return await Calificaciones.findById(id);
  }

  async getByEstado(estado) {
    return await Calificaciones.find({ "estado": estado });
  }

  async getDocumentos(cuatrimestre, nombre1, nombre2) {
    return await Calificaciones.find({
      "cuatrimestre": cuatrimestre,
      "NombreEstudiante.nombre1": nombre1,
      "NombreEstudiante.nombre2": nombre2
    });
  }

  async getCivicaRango(min, max) {
    return await Calificaciones.find({
      "notaCivica": { $gte: min, $lt: max }
    });
  }

  async getPromedioCuatrimestre(cuatrimestre) {
    return await Calificaciones.aggregate([
      { $match: { "cuatrimestre": parseInt(cuatrimestre) } },
      {
        $group: {
          _id: "$cuatrimestre",
          promedioMatematicas: { $avg: "$notaMatematica" },
          promedioCiencias: { $avg: "$notaCiencia" },
          promedioLiteratura: { $avg: "$notaLiteratura" },
          promedioCivica: { $avg: "$notaCivica" }
        }
      }
    ]);
}

async getNotaMasAlta(cuatrimestre, nombre1, nombre2) {
  return await Calificaciones.aggregate([
    {
      $match: {
        cuatrimestre: parseInt(cuatrimestre),
        "NombreEstudiante.nombre1": nombre1,
        "NombreEstudiante.nombre2": nombre2
      }
    },
    {
      $project: {
        NotaMasAlta: { $max: ["$notaMatematica", "$notaCiencia", "$notaLiteratura", "$notaCivica"] }
      }
    }
  ]);
}
  async updateItem(id, data) {
  return await Calificaciones.findByIdAndUpdate(id, data, { new: true });
}

  async deleteItem(id) {
  return await Calificaciones.findByIdAndDelete(id);
}
}

module.exports = new CalificacionesService();