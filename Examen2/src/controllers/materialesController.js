const MaterialesService = require('../services/materialesService');

class MaterialesController {

    async createMateriales(req, res) {
        try {
            const material = await MaterialesService.createMateriales(req.body);
            res.status(201).json(material);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getMateriales(req, res) {
        try {
            const material = await MaterialesService.getMateriales(req.params.id);
            if (!material) {
                return res.status(404).json({ error: 'Material no encontrado' });
            }
            res.json(material);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getMateriales(req, res) {
        try {
            const material = await MaterialesService.getMateriales();
            if (!material) {
                return res.status(404).json({ error: 'Material no encontrado' });
            }
            res.json(material);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateMateriales(req, res) {
        try {
            const material = await MaterialesService.updateMateriales(req.params.id, req.body);
            if (!material) {
                return res.status(404).json({ error: 'Material no encontrado'});
            }
            res.json(material);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteMateriales(req, res) {
        try {
            const material = await MaterialesService.deleteMateriales(req.params.id);
            if (!material) {
                return res.status(404).json({ error: 'Material no encontrado'});
            }
            res.json({ message: 'Material eliminado con éxito'});
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new MaterialesController();