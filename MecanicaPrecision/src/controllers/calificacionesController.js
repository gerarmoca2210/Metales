const calificacionesService = require('../services/calificacionesService');
 
class CalificacionesController {
 
 
  async createItem(req, res) {
    try {
      const item = await calificacionesService.createItem(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async getItem(req, res) {
    try {
      const item = await calificacionesService.getItem(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getEstado(req, res) {
    try {
      const item = await calificacionesService.getByEstado(req.params.estado);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCivicaRango(req, res) {
    try {
      const {min, max} = req.params;
      const item = await calificacionesService.getCivicaRango(min,max);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getPromedioCuatrimestre(req, res) {
    try {
      const cuatrimestre = req.params.cuatrimestre;
      const item = await calificacionesService.getPromedioCuatrimestre(cuatrimestre);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  async getDocuments(req, res) {
    try {
      const {cuatrimestre, nombreCompleto} = req.params;
      const nombre = nombreCompleto.split(" ");
      const nombre1 = nombre[0];
      const nombre2 = nombre[1];

      const item = await calificacionesService.getDocumentos(cuatrimestre,nombre1,nombre2);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getNotaMasAlta(req, res) {
    try {
      const {cuatrimestre, nombreCompleto} = req.params;
      const nombre = nombreCompleto.split(" ");
      const nombre1 = nombre[0];
      const nombre2 = nombre[1];

      const item = await calificacionesService.getNotaMasAlta(cuatrimestre,nombre1,nombre2);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async updateItem(req, res) {
    try {
      const item = await calificacionesService.updateItem(req.params.id, req.body);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
 
  async deleteItem(req, res) {
    try {
      const item = await calificacionesService.deleteItem(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json({ message: 'Item deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
 
module.exports = new CalificacionesController();