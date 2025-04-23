const InventarioService = require('../services/inventarioService');

class InventarioController {

    async createInventario(req, res) {
        try {
            const invent = await InventarioService.createInventario(req.body);
            res.status(201).json(invent);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getInventario(req, res) {
        try {
            const invent = await InventarioService.getInventario(req.params.id);
            if (!invent) {
                return res.status(404).json({ error: 'Inventario no encontrado' });
            }
            res.json(invent);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getInventario(req, res) {
        try {
            const invent = await InventarioService.getInventario();
            if (!invent) {
                return res.status(404).json({ error: 'Inventario no encontrado' });
            }
            res.json(invent);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateInventario(req, res) {
        try {
            const invent = await InventarioService.updateInventario(req.params.id, req.body);
            if (!invent) {
                return res.status(404).json({ error: 'Inventario no encontrado'});
            }
            res.json(invent);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteInventario(req, res) {
        try {
            const invent = await InventarioService.deleteInventario(req.params.id);
            if (!invent) {
                return res.status(404).json({ error: 'Inventario no encontrado'});
            }
            res.json({ message: 'Inventario eliminado con éxito'});
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new InventarioController();