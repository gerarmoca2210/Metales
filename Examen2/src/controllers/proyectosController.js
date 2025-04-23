const ProyectosService = require('../services/proyectosService');

class ProyectosController {

    async createProyectos(req, res) {
        try {
            const proyecto = await ProyectosService.createProyectos(req.body);
            res.status(201).json(proyecto);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getProyectos(req, res) {
        try {
            const proyecto = await ProyectosService.getProyectos(req.params.id);
            if (!proyecto) {
                return res.status(404).json({ error: 'Proyecto no encontrado' });
            }
            res.json(proyecto);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getProyectos(req, res) {
        try {
            const proyecto = await ProyectosService.getProyectos();
            if (!proyecto) {
                return res.status(404).json({ error: 'Proyecto no encontrado' });
            }
            res.json(proyecto);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateProyectos(req, res) {
        try {
            const proyecto = await ProyectosService.updateProyectos(req.params.id, req.body);
            if (!proyecto) {
                return res.status(404).json({ error: 'Proyectos no encontrado'});
            }
            res.json(proyecto);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteProyectos(req, res) {
        try {
            const proyecto = await ProyectosService.deleteProyectos(req.params.id);
            if (!proyecto) {
                return res.status(404).json({ error: 'Proyecto no encontrado'});
            }
            res.json({ message: 'Proyecto eliminado con éxito'});
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ProyectosController();