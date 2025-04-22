const pedidosService = require('../services/pedidosService');
const calificacionesService = require('../services/pedidosService');

class CalificacionesController {
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

    async getPedidosConProductos(req, res) {
        try {
            const item = await pedidosService.getPedidosConProductos();
            if (!item) {
                return res.status(404).json({ error: 'Pedidos no Encontrados' });
            }
            res.json(item);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new CalificacionesController();