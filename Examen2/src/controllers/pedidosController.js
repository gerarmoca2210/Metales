const pedidosService = require('../services/pedidosService');
const productosService = require('../services/productosService');

class PedidosController {
    async getPedido(req, res) {
        try {
            const pedidos = await pedidosService.getPedido(req.params.id);
            if (!pedidos) {
                return res.status(404).json({ error: 'Pedidos no Encontrados' });
            }
            res.json(pedidos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async createPedido(req, res) {
        try {
            const pedido = await pedidosService.createPedidos(req.body);
            res.status(201).json(pedido);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updatePedido(req, res) {
        try {
            const pedido = await pedidosService.updatePedidos(req.params.id, req.body);
            if (!pedido) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json(pedido);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deletePedido(req, res) {
        try {
            const pedido = await pedidosService.deletePedidos(req.params.id);
            if (!pedido) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json({ message: 'Producto eliminado con éxito' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getPedidos(req, res) {
        try {
            const pedidos = await pedidosService.getPedidos();
            if (!pedidos) {
                return res.status(404).json({ error: 'Pedidos no Encontrados' });
            }
            res.json(pedidos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getPedidosConProductos(req, res) {
        try {
            const pedidos = await pedidosService.getPedidosConProductos();
            if (!pedidos) {
                return res.status(404).json({ error: 'Pedidos no Encontrados' });
            }
            res.json(pedidos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new PedidosController();