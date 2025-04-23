const ProveedoresService = require('../services/proveedoresService');

class ProveedoresController {

    async createProveedores(req, res) {
        try {
            const proveedor = await ProveedoresService.createProveedores(req.body);
            res.status(201).json(proveedor);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getProveedores(req, res) {
        try {
            const proveedor = await ProveedoresService.getProveedores(req.params.id);
            if (!proveedor) {
                return res.status(404).json({ error: 'Proveedor no encontrado' });
            }
            res.json(proveedor);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getProveedores(req, res) {
        try {
            const proveedor = await ProveedoresService.getProveedores();
            if (!proveedor) {
                return res.status(404).json({ error: 'Proveedor no encontrado' });
            }
            res.json(proveedor);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateProveedores(req, res) {
        try {
            const proveedor = await ProveedoresService.updateProveedores(req.params.id, req.body);
            if (!proveedor) {
                return res.status(404).json({ error: 'Proveedor no encontrado'});
            }
            res.json(proveedor);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteProveedores(req, res) {
        try {
            const proveedor = await ProveedoresService.deleteProveedores(req.params.id);
            if (!proveedor) {
                return res.status(404).json({ error: 'Proveedor no encontrado'});
            }
            res.json({ message: 'Proveedor eliminado con éxito'});
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ProveedoresController();