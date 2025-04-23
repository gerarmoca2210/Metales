const FacturasService = require('../services/clientesService');

class FacturasController {

    async createFacturas(req, res) {
        try {
            const factura = await FacturasService.createFacturas(req.body);
            res.status(201).json(factura);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getFacturas(req, res) {
        try {
            const factura = await FacturasService.getFacturas(req.params.id);
            if (!factura) {
                return res.status(404).json({ error: 'Factura no encontrado' });
            }
            res.json(factura);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getFacturas(req, res) {
        try {
            const factura = await FacturasService.getFacturas();
            if (!factura) {
                return res.status(404).json({ error: 'Factura no encontrado' });
            }
            res.json(factura);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateFacturas(req, res) {
        try {
            const factura = await FacturasService.updateFacturas(req.params.id, req.body);
            if (!factura) {
                return res.status(404).json({ error: 'Factura no encontrado'});
            }
            res.json(factura);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteFacturas(req, res) {
        try {
            const factura = await FacturasService.deleteFacturas(req.params.id);
            if (!factura) {
                return res.status(404).json({ error: 'Factura no encontrado'});
            }
            res.json({ message: 'Factura eliminado con éxito'});
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new FacturasController();