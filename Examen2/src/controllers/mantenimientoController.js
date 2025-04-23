const MantenimientoService = require('../services/mantenimientoService');

class MantenimientoController {

    async createMantenimiento(req, res) {
        try {
            const mant = await MantenimientoService.createMantenimiento(req.body);
            res.status(201).json(mant);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getMantenimiento(req, res) {
        try {
            const mant = await MantenimientoService.getMantenimiento(req.params.id);
            if (!mant) {
                return res.status(404).json({ error: 'Mantenimiento no encontrado' });
            }
            res.json(mant);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getMantenimiento(req, res) {
        try {
            const mant = await MantenimientoService.getMantenimiento();
            if (!mant) {
                return res.status(404).json({ error: 'Mantenimiento no encontrado' });
            }
            res.json(mant);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateMantenimiento(req, res) {
        try {
            const mant = await MantenimientoService.updateMantenimiento(req.params.id, req.body);
            if (!mant) {
                return res.status(404).json({ error: 'Mantenimiento no encontrado'});
            }
            res.json(mant);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteMantenimiento(req, res) {
        try {
            const mant = await MantenimientoService.deleteMantenimiento(req.params.id);
            if (!mant) {
                return res.status(404).json({ error: 'Mantenimiento no encontrado'});
            }
            res.json({ message: 'Mantenimiento eliminado con éxito'});
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new MantenimientoController();